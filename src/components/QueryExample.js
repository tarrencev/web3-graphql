import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const queryText = gql`
  query {
    currentAccounts {
      address
      balance
    }
  }
`;

class QueryComponent extends Component {
  render() {
    return (
      <Query query={queryText}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h2> Loading </h2>;
          }
          if (error) {
            return <h2> {JSON.stringify(error)} </h2>;
          }

          return (
            <div>
              <h3>{JSON.stringify(data.currentAccounts, 0, 2)}</h3>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default QueryComponent;
