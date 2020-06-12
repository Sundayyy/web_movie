import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import TvShow from "./components/TvShow";
import Trending from "./components/Trending";
import DashBox from "./components/Dashbox";
import NotFound from "./components/NotFound";
const App = () => {
  console.log(1);
  if (!toast.isActive("designer_refresh")) {
    toast.dark("Wellcome to The Movie Db", {
      toastId: "designer_refresh",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "notificationToolTip",
    });
  }
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/TV_Show" component={TvShow} exact />
          <Route path="/trending" component={Trending} exact />
          <Route path="/movie" component={Home} exact />
          <Route path="/movie/:id" component={DashBox} exact />
          <Route path="/notfo_found" component={NotFound} />
        </Switch>
      </React.Fragment>
      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </Router>
  );
};
export default App;
