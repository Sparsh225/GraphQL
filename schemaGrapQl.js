import { gql } from "apollo-server";
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteName]
    iquote(by: ID!): [Quote]
  }

  type QuoteName {
    name: String
    by: IdName
  }
  type IdName {
    _id: String
    firstName: String
  }

  type Quote {
    name: String
    by: ID!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    quotes: [Quote]
  }

  type Token {
    token: String
  }

  type Mutation {
    signupUser(UserNew: UserInput!): User
    signinUser(userSignin: UserSigninInput!): Token
    createQuote(name: String!): String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserSigninInput {
    email: String!
    password: String!
  }
`;

export default typeDefs;
