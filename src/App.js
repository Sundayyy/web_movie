import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import TvShow from "./components/TvShow";
import Trending from "./components/Trending";
import DashBox from "./components/Dashbox";
import NotFound from "./components/NotFound";
import Movie from "./components/Movie";
const App = () => {
  toast.dark("Wellcome to The Movie Db", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/TV_Show" component={TvShow} exact />
          <Route path="/trending" component={Trending} exact />
          <Route path="/movie" component={Movie} exact />
          <Route path="/movie/:id" component={DashBox} exact />
          <Route path="/notfo_found" component={NotFound} />
        </Switch>
      </React.Fragment>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </Router>
  );
};
export default App;
