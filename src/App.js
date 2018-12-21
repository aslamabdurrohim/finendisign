import React from "react";
import { Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faPlus, faEdit, faImages, faTimes, faShareAlt, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/fontawesome-free-brands";

import Home from "./views/Home";
import Illustrations from "./views/Illustrations";
import IllustrationsDetail from "./views/Illustrations/IllustrationsDetail";
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
    faTimes,
    faShareAlt,
    faChevronRight,
    faChevronLeft
);

const App = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/illustrations" component={Illustrations} />
        <Route path="/settings" component={Settings} />
        <Route render={() => <h2>Not Found :(</h2>} />
    </Switch>
);

export default App;
