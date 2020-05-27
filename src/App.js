import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import TvShow from "./components/TvShow";
import Trending from "./components/Trending";
import Changes from "./components/Changes";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/TV_Show" component={TvShow} exact />
          <Route path="/trending" component={Trending} exact />
          <Route path="/changes" component={Changes} exact />
          <Route path="/" component={Home} exact />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
