import React, { Component } from "react";
import Layout from "../../components/Layout";
import Gallery from "../../components/Gallery";

class Illustrations extends Component {
    state = {
        title: "Illustrations"
    };

    render() {
        return (
            <Layout nomargin>
                <Gallery />
            </Layout>
        );
    }
}

export default Illustrations;
