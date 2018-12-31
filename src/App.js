import React, { Fragment } from "react";
import { Route, withRouter } from "react-router-dom";
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

import Routes from "./routes";
import Home from "./views/Home";

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
                    timeout={{ enter: 1000, exit: 1000 }}
                    classNames="fade"
                >
                    <Routes />
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    </Fragment>
);

export default withRouter(App);
