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
    me {
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

/** For search results - handles shortcut to view business by category */
export const QUERY_BUSINESS_BY_CATEGORY = gql`
  query businessesCategory($categoryName: String!) {
    businessesCategory(category: $categoryName) {
      name
      description
    }
  }
`;

/** View specific Business profile page */
export const QUERY_BUSINESS_BY_ID = gql`
  query getBusiness($id: ID!) {
    getBusiness(businessId: $id) {
      _id
      createdDate
      name
      description
      owner
      avgScore
    }
  }
`;
