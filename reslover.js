import { quotes, users } from "./fakedb.js";
import crypto from "crypto";
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
  Mutation: {
    signupUserDummy: (_, { UserNew }) => {
      const id = crypto.randomBytes(5).toString("hex");
      users.push({
        id,
        ...UserNew,
      });
      return users.find((user) => user.id == id);
    },
  },
};

export default resolvers;
