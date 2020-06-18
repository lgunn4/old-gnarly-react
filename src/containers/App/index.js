import React from "react";

import { Switch, Route } from "react-router-dom";

import Paintings from "../Paintings";
import Painting from "../Painting";
import Layout from "../Layout";


function App() {
  return (
      <Layout>
        <div className="App">
            <Switch>
                <Route path="/" component={Paintings} exact />
                <Route path="/painting/:id" component={Painting} />
            </Switch>
        </div>
      </Layout>
  );
}

export default App;
