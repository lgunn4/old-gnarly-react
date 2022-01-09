import React from "react";

import { Switch, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import PostPage from "./pages/PostPage";
import CategoryPage from "./pages/CategoryPage";
import Configuration from "./containers/Configuration";


function App() {
  return (
      <Configuration>
        <div className="App">
            <Switch>
                <Route path="/" component={FrontPage} exact />
                <Route path="/post/:id" component={PostPage} />
                <Route path="/category/:id" component={CategoryPage} />
            </Switch>
        </div>
      </Configuration>
  );
}

export default App;
