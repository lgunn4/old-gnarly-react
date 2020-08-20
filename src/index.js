import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
  <Router>
      <ScrollToTop>
          <ApolloProvider client={client}>
              <App />
          </ApolloProvider>
      </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
