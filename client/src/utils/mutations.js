import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($fullName: String!, $email: String!, $password: String!) {
    addUser(fullName: $fullName, email: $email, password: $password) {
      token

      user {
        _id
      }
    }
  }
`;
