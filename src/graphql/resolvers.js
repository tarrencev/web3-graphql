import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);

const resolvers = {
  Query: {
    currentAccounts: async (root, args, context, info) => {
      const addresses = await web3.eth.getAccounts();
      const balances = await Promise.all(
        addresses.map(address => web3.eth.getBalance(address))
      );
      return addresses.map((address, i) => ({ address, balance: balances[i] }));
    }
  }
};

export default resolvers;
