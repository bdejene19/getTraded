import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($fullName: String!) {
    user(fullName: $fullName) {
      _id
      createdDate
      fullName
      email
      business {
        _id
        createdDate
        name
        description
        owner
        category {
          _id
          name
        }
        experience {
          _id
          workType
          workDescription
          workImages
        }
        avgScore
        reviews {
          _id
          reviewText
          reviewAuthor
          reviewScore
          createdDate
        }
      }
    }
  }
`;

export const QUERY_BUSINESSES = gql`
  query getBusinesses {
    businessEs {
      _id
      createdDate
      name
      description
      owner
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_BUSINESS = gql`
  query getSingleBusiness($businessId: ID!) {
    business(businessId: $businessId) {
      _id
      createdDate
      name
      description
      owner
      category {
        _id
        name
      }
      experience {
        _id
        workType
        workDescription
        workImages
      }
      avgScore
      reviews {
        _id
        reviewText
        reviewAuthor
        reviewScore
        createdDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      fullName
      email
      businesses {
        _id
        createdDate
        name
        description
        owner
        category {
          _id
          name
        }
        experience {
          _id
          workType
          workDescription
          workImages
        }
        avgScore
        reviews {
          _id
          reviewText
          reviewAuthor
          reviewScore
        }
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
