import React, { Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faEnvelope,
    faPlus,
    faEdit,
    faImages,
    faTimes,
    faShareAlt,
    faChevronRight,
    faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/fontawesome-free-brands";
import Layout from "./components/Layout";

import Home from "./views/Home";
import Illustrations from "./views/Illustrations";
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

const App = ({ location }) => (
    <Fragment>
        <Route exact path="/" component={Home} />
        <Layout>
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 600, exit: 600 }}
                    classNames="fade"
                >
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/illustrations" component={Illustrations} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    </Fragment>
);

export default withRouter(App);
