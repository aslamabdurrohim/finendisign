import React from "react";
import { Route, Switch } from "react-router-dom";

import Illustrations from "./views/Illustrations";
import Logos from "./views/Logos";
import Contact from "./views/Contact";
import About from "./views/About";
import Settings from "./views/Settings";

export default () => (
    <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/illustrations" component={Illustrations} />
        <Route path="/logos" component={Logos} />
        <Route path="/settings" component={Settings} />
    </Switch>
);
