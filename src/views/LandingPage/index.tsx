import * as React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/explore">Explore</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};
