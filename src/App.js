import React from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPlus, faEdit, faImages, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/fontawesome-free-brands";

import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Settings from "./views/Settings";

library.add(
    faInstagram,
    faFacebook,
    faTwitter,
    faEnvelope,
    faPlus,
    faEdit,
    faImages,
    faTimes
);

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route paht="/settings" component={Settings} />
    </Switch>
);

export default App;
