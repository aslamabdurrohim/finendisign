import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Media from "react-media";
import { isBrowser, isMobile } from "react-device-detect";
import { CancelToken } from "axios";
import { get } from "../../api";
import IllustrationsDetail from "./IllustrationsDetail";
import ScrollToTop from "../../components/ScrollToTop";
import Gallery from "../../components/Gallery";

class Illustrations extends Component {
    state = {
        designs: []
    };

    async componentDidMount() {
        this.source = CancelToken.source();
        const metaDesigns = await get(this.source);
        const designs = metaDesigns.data.filter(
            design => design.category === "Illustration" || design.category === "illustration"
        );
        this.setState({
            designs
        });
    }

    componentWillUnmount() {
        this.source.cancel("Request is canceled due to new incoming request");
    }

    render() {
        const { designs } = this.state;
        const { match, location } = this.props;
        return (
            <Fragment>
                <ScrollToTop>
                    <Route path={`${match.path}/:name`} component={IllustrationsDetail} />
                </ScrollToTop>
                <Media
                    query="(min-width: 501px)"
                    defaultMatches={isBrowser}
                    render={() => <Gallery designs={designs} />}
                />
                {location.pathname === "/illustrations" && (
                    <Media
                        query="(max-device-width : 480px)"
                        defaultMatches={isMobile}
                        render={() => <Gallery designs={designs} />}
                    />
                )}
            </Fragment>
        );
    }
}

export default Illustrations;
