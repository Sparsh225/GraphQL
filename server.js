import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./schemaGrapQl.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { JWT_SECRET, MONGO_URL } from "./config.js";

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

const context = ({ req }) => {
  const { authorization } = req.headers;
  //console.log(authorization);
  if (authorization) {
    console.log(authorization);
    console.log(JWT_SECRET);
    const { userId } = jwt.verify(authorization, JWT_SECRET);
    console.log(userId);
    return { userId };
  }
}; //act as a middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});
//mongodb+srv://sparshrawat34:1234@cluster0.afvs3p3.mongodb.net/graphQldb?retryWrites=true&w=majority&appName=Cluster0
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
