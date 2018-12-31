import React, { Component } from "react";
import qs from "query-string";
import { CancelToken } from "axios";
import { get } from "../../../api";
import GalleryDetailWrapper from "../../../components/Gallery/GalleryDetailWrapper";

class LogosDetail extends Component {
    state = {
        designs: {
            id: null,
            title: "",
            desc: "",
            imageURLs: [],
            category: "",
            isHomeBg: false
        }
    };

    async componentDidMount() {
        const { location } = this.props;
        const id = parseInt(qs.parse(location.search).id, 10);

        this.source = CancelToken.source();
        const metaDesigns = await get(this.source, id);
        const designs = metaDesigns.data.filter(
            design => (design.category === "logo" || design.category === "Logo") && design.id === id
        );
        this.setState({
            designs: designs[0]
        });
    }

    componentWillUnmount() {
        this.source.cancel("Request is canceled due to new incoming request");
    }

    render() {
        const { designs } = this.state;
        const { match } = this.props;
        return <GalleryDetailWrapper designs={designs} match={match} />;
    }
}

export default LogosDetail;
