import React from "react";
import { ClipLoader } from "react-spinners";
const Spinner = ({ loading }) => {
  return (
    <ClipLoader loading={loading} sizeUnit={"px"} size={50} color={"#faca31"} />
  );
};

export default Spinner;
