import React from "react";
import Spinner from "./Spinner";
import { Fade, Bounce } from "react-reveal";

const MovieLoader = ({ movies, loading, bounce }) => {
  if (movies.length === 0 && loading) {
    return (
      <div className="flex-center">
        <Spinner />
      </div>
    );
  } else if (movies.length === 0 && !loading) {
    return (
      <div className="flex-center">
        {bounce ? (
          <Fade>
            <h2 style={{ color: "#faca31" }}>
              There are no movies in the data base.
            </h2>
          </Fade>
        ) : (
          <Bounce>
            <h2 style={{ color: "#faca31" }}>
              There are no movies in the data base.
            </h2>
          </Bounce>
        )}
      </div>
    );
  }
  return "";
};
export default MovieLoader;
