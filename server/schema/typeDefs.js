const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    id: ID
  }
`;

module.exports = typeDefs;
