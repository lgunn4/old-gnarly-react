import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "../HomePage";
import Post from "../Post";
import Layout from "../Layout";


function App() {
  return (
      <Layout>
        <div className="App">
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/post/:id" component={Post} />
            </Switch>
        </div>
      </Layout>
  );
}

export default App;
