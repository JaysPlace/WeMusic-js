import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LandingPage } from "views/LandingPage";
import { ExploreApp } from "views/ExploreApp";
import { SignInPage } from "views/SignInPage";
import { SignUpPage } from "views/SignUpPage";
import { Dashboard} from "views/Dashboard";

export const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/explore" component={ExploreApp} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/dashboard" component={Dashboard}/>
    </Router>
  );
};
