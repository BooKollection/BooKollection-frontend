import { ApolloClient, InMemoryCache } from "@apollo/client";

export const clientGraphql = new ApolloClient({
  uri: process.env.BACKEND_URI,
  cache: new InMemoryCache(),
  typeDefs: [
    "type LoginInput {  reqEmail: String!  reqGoogleId: String!reqTokenId: String!}",
  ],
});
