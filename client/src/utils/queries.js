import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      reviews {
        _id
        reviewsText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    user {
      _id
      firstName
      lastName
      email
      business
      phoneNumber
    }
  }
`;

export const QUERY_BUSINESS_BY_CATEGORY = gql`
  query businessByCategory($categoryName: String!) {
    business(category: $categoryName) {
      _id
      createdDate
      name
      description
      owner
      experience
      category
      score
      reviews
    }
  }
`;

export const QUERY_BUSINESS_BY_ID = gql`
  query businessById($id: ID!) {
    business(_id: $id) {
      _id
      createdDate
      name
      description
      owner
      experience
      category
      score
      reviews
    }
  }
`;
