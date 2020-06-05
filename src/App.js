import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import TvShow from "./components/TvShow";
import Trending from "./components/Trending";
import DashBox from "./components/Dashbox";
import NotFound from "./components/404NotFound";
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/TV_Show" component={TvShow} exact />
          <Route path="/trending" component={Trending} exact />
          <Route path="/movie" component={Home} exact />
          <Route path="/movie/:id" component={DashBox} exact />
          <Route path="/404NotFound" component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
