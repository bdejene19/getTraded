// import { gql } from "@apollo/client";

// export const QUERY_USER = gql`
//   query user($fullName: String!) {
//     user(fullName: $fullName) {
//       _id
//       createdDate
//       fullName
//       email
//       business {
//         _id
//         createdDate
//         name
//         description
//         owner
//         category {
//           _id
//           name
//         }
//         experience {
//           _id
//           workType
//           workDescription
//           workImages
//         }
//         avgScore
//         reviews {
//           _id
//           reviewText
//           reviewAuthor
//           reviewScore
//           createdDate
//         }
//       }
//     }
//   }
// `;

// export const QUERY_BUSINESSES = gql`
//   query getBusinesses {
//     businessEs {
//       _id
//       createdDate
//       name
//       description
//       owner
//       category {
//         _id
//         name
//       }
//     }
//   }
// `;

// export const QUERY_CATEGORIES = gql`
//   {
//     categories {
//       _id
//       name
//     }
//   }
// `;

// export const QUERY_SINGLE_BUSINESS = gql`
//   query getSingleBusiness($businessId: ID!) {
//     business(businessId: $businessId) {
//       _id
//       createdDate
//       name
//       description
//       owner
//       category {
//         _id
//         name
//       }
//       experience {
//         _id
//         workType
//         workDescription
//         workImages
//       }
//       avgScore
//       reviews {
//         _id
//         reviewText
//         reviewAuthor
//         reviewScore
//         createdDate
//       }
//     }
//   }
// `;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       fullName
//       email
//       businesss {
//         _id
//         createdDate
//         name
//         description
//         owner
//         category {
//           _id
//           name
//         }
//         experience {
//           _id
//           workType
//           workDescription
//           workImages
//         }
//         avgScore
//         reviews {
//           _id
//           reviewText
//           reviewAuthor
//           reviewScore
//         }
//       }
//     }
//   }
// `;
