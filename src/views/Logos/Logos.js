import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Media from "react-media";
import { isBrowser, isMobile } from "react-device-detect";
import { CancelToken } from "axios";
import { get } from "../../api";
import LogosDetail from "./LogosDetail";
import ScrollToTop from "../../components/ScrollToTop";
import Gallery from "../../components/Gallery";

class Logos extends Component {
    state = {
        designs: []
    };

    async componentDidMount() {
        this.source = CancelToken.source();
        const metaDesigns = await get(this.source);
        const designs = metaDesigns.data.filter(
            design => design.category === "logo" || design.category === "Logo"
        );
        this.setState({
            designs
        });
    }

    componentWillUnmount() {
        this.source.cancel("Canceled due to new request");
    }

    render() {
        const { designs } = this.state;
        const { match, location } = this.props;
        return (
            <Fragment>
                <ScrollToTop>
                    <Route path={`${match.path}/:name`} component={LogosDetail} />
                </ScrollToTop>
                <Media
                    query="(min-width: 501px)"
                    defaultMatches={isBrowser}
                    render={() => <Gallery designs={designs} />}
                />
                {location.pathname === "/logos" && (
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

export default Logos;
