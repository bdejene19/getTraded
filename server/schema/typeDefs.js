const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Business {
    _id: ID
    createdDate: String
    name: String
    description: String
    owner: User
    category: Category
    experience: [PreviousWork]
    score: Int
    reviews: [Review]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Review {
    _id: ID
    createdDate: String
    business: Business
    user: User
    rating: Int
    comment: String
  }

  type PreviousWork {
    _id: ID
    business: Business
    workType: String
    workImages: [String]
    workDescription: String
    jobCompleted: Boolean
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    businesss(category: ID, name: String): [Business]
    business(_id: ID!): Business
    user: User
    reviews: [Review]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth 
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
