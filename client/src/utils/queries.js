
import { gql } from '@apollo/client';

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
  query searchBusinessCategories($categoryName: String!) {
    getBusinessesByCategory(category: $categoryName) {
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

/** View specific Business profile page */
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
