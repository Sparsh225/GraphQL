import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { quotes, users } from "./fakedb.js";

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    quotes: [Quote]
    iquote(by: ID!): [Quote]
  }

  type Quote {
    name: String
    by: ID
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id == id), //_ issliye kyuki vo khud parent hai to vo undefined return karega
    quotes: () => quotes,
    iquote: (_, args) => quotes.filter((quote) => quote.by == args.by),
  },
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by == user.id), //phele argument parent hota hai
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
