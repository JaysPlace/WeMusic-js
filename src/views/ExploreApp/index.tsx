import * as React from "react";
import { Link } from "react-router-dom";

export const ExploreApp = () => {
  return (
    <>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};
