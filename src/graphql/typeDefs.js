const typeDefs = `
  type User {
    address: String
    balance: String
  }

  type Query {
    currentAccounts: [User]
  }
`;

export default typeDefs;
