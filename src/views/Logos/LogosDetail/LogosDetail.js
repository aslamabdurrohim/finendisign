import React, { Component } from "react";
import GalleryDetailWrapper from "../../../components/Gallery/GalleryDetailWrapper";

class LogosDetail extends Component {
    state = {
        designs: {
            id: 1,
            title: "Hello World",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            designUrls: [
                "http://lorempixel.com/630/930/",
                "http://lorempixel.com/630/930/",
                "http://lorempixel.com/630/930/"
            ]
        }
    };

    render() {
        const { designs } = this.state;
        const { match } = this.props;
        return <GalleryDetailWrapper designs={designs} match={match} />;
    }
}

export default LogosDetail;
