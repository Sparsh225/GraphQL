import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGrapQl.js";

import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true, // Corrected option name
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo db");
});

mongoose.connection.on("error", (error) => {
  console.log("error connecting to mongo db", error);
});

import "./models/User.js";
import "./models/Quotes.js";

import resolvers from "./reslover.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
//mongodb+srv://sparshrawat34:1234@cluster0.afvs3p3.mongodb.net/graphQldb?retryWrites=true&w=majority&appName=Cluster0
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
