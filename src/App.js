import React from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/fontawesome-free-brands";

import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";

library.add(
    faInstagram,
    faFacebook,
    faTwitter,
    faEnvelope
);

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default App;
