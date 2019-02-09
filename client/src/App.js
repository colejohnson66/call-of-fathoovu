import "./App.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import React from "react";
import Story from "./pages/Story";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/story" component={Story} />
    </div>
  </Router>
);

export default App;