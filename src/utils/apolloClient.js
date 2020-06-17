import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import {REACT_APP_BACKEND_URL} from "../constants";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${REACT_APP_BACKEND_URL}/graphql`
});
const client = new ApolloClient({
  cache,
  link
});

export default client;
