import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Paintings";
import Paintings from "../Paintings";
import Category from "../Category";
import Layout from "../../components/Layout";

function App() {
  return (
    <div className="App">
        <Layout >
            <Switch>
                <Route path="/" component={Paintings} exact />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
