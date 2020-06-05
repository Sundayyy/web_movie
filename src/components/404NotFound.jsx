import React from "react";
import { Fade } from "react-reveal";
const NotFound = () => {
  const styles = {
    color: "#faca31",
    padding: "20px",
  };
  return (
    <Fade>
      <h2 style={styles}>So sorry, this movie don't have a Trailer.</h2>
      <h3 style={styles}>Thanks for supporting !</h3>
    </Fade>
  );
};

export default NotFound;
