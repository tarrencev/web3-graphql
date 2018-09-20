import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-client";
import { SchemaLink } from "apollo-link-schema";
import { InMemoryCache } from "apollo-cache-inmemory";
import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import QueryExample from './components/QueryExample';

const initApollo = () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache({
      addTypename: false
    })
  });

  return client;
};

class App extends Component {
  state = {
    client: null
  };

  async componentWillMount() {
    const client = await initApollo();
    this.setState({ client });
  }

  render() {
    if (!this.state.client) {
      return "Loading ...";
    }

    return (
      <ApolloProvider client={this.state.client}>
        <QueryExample />
      </ApolloProvider>
    );
  }
}

export default App;
