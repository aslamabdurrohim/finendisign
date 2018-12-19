import React, { Component } from "react";
import Layout from "../../components/Layout";

class Illustrations extends Component {
    state = {
        title: "Illustrations"
    };

    render() {
        const { title } = this.state;
        return (
            <Layout title={title} nomargin>
                <div />
            </Layout>
        );
    }
}

export default Illustrations;
