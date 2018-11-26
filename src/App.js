import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default App;
