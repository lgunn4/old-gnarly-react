import React from "react";

import { Switch, Route } from "react-router-dom";

import Paintings from "../Paintings";
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
