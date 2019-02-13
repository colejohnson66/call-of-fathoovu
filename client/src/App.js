import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import React from "react";
import Users from "./pages/Users";

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={Users} />
        </div>
    </Router>
);

export default App;