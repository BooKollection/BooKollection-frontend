import { ApolloClient, InMemoryCache } from "@apollo/client";
console.log(process.env.BACKEND_URI);

export const clientGraphql = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  typeDefs: [
    "type LoginInput {  reqEmail: String!  reqGoogleId: String!reqTokenId: String!}",
  ],
});
