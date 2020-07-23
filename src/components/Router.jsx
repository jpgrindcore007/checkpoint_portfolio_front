import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Homepage";
import Navigation from "./Navigation";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Navigation/:id" component={Navigation} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
