import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import React from "react";
import User from "./pages/User";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/user" component={User} />
    </div>
  </Router>
);

export default App;