import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupUser(UserNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation signinUser($userSignin: UserSigninInput!) {
    user: signinUser(userSignin: $userSignin) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation createQuote($name: String!) {
    createQuote(name: $name)
  }
`;
