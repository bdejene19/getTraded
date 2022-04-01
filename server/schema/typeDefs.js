const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    createdDate: String
    fullName: String
    email: String
    password: String
    business: [Business]!
  }

  type Business {
    _id: ID
    createdDate: String
    name: String
    description: String
    owner: String
    category: Category
    experience: [Experience]!
    avgScore: Int
    reviews: [Review]!
  }

  type Category {
    _id: ID
    name: String
  }

  type Experience {
    workType: String
    workDescription: String
    workImages: [String]
  }

  type Review {
    reviewText: String
    reviewAuthor: String
    reviewScore: Int
    createdDate: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(fullName: String!): User
    businesses(fullName: String): [Business]
    businessesCategory(name: String): [Business]
    getBusiness(businessId: ID!): Business
    me: User
  }

  type Mutation {
    addUser(fullName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBusiness(name: String!, description: String!, category: ID!): Business
    addReview(businessId: ID!, reviewText: String!, reviewScore: Int!): Business
    addExperience(
      businessId: ID!
      workType: String!
      workDescription: String!
    ): Business
    removeBusiness(businessId: ID!): Business
    removeReview(businessId: ID!, reviewId: ID!): Business
    removeExperience(businessId: ID!, experienceId: ID!): Business
  }
`;

module.exports = typeDefs;
