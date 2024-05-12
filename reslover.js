import { error, log } from "console";
import { quotes, users } from "./fakedb.js";
import crypto from "crypto";
import mongoose from "mongoose";
import bycrpt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

const User = mongoose.model("User"); //to use the model // if we pass the schema then we register it
const Quote = mongoose.model("Quote");
const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { _id }) => await User.findById({ _id }), //users.find((user) => user._id == _id), //_ issliye kyuki vo khud parent hai to vo undefined return karega
    quotes: async () => await Quote.find({}).populate("by", "_id firstName"),
    iquote: async (_, { by }) => await Quote.find({ by }), // quotes.filter((quote) => quote.by == args.by),
  },
  User: {
    quotes: async (user) => Quote.find({ by: user._id }), //quotes.filter((quote) => quote.by == user._id), //phele argument parent hota hai
  },
  Mutation: {
    signupUser: async (_, { UserNew }) => {
      const user = await User.findOne({ email: UserNew.email });
      if (user) {
        throw new Error("User already exists with that email");
      }

      const hashPassword = await bycrpt.hash(UserNew.password, 12);
      const newUser = new User({
        ...UserNew,
        password: hashPassword,
      });

      return await newUser.save();
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("User does not Exists");
      }
      const doMatch = await bycrpt.compare(userSignin.password, user.password);
      if (!doMatch) {
        throw new Error("email or password is invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      console.log(token);
      return { token };
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) throw new Error("You must be logged in");
      const newQuote = new Quote({
        name,
        by: userId,
      });
      await newQuote.save();
      return "Quote saved successfully";
    }, //3rd argument is for the middleware context usko destructure karke userId nikal denge
  },
};

export default resolvers;
