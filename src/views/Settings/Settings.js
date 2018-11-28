// eslint no-console: "0"

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { data } from "../../utils/mock";
import styles from "./Settings.module.css";
import ImageLoader from "../../components/ImageLoader";
import Layout from "../../components/Layout";
import Button from "../../components/Common/Button";
import Alert from "../../components/Alert";

class Settings extends Component {
    state = {
        homeBackground: 2
    };

    handleAddDesignClick = () => {

    }

    handleChangeBackground = id => {
        this.setState({
            homeBackground: id
        });

        Alert("success", "Background has been changed!");
    }

    renderColumns = () => (
        [
            {
                Header: "Gallery Configurations",
                columns: [
                    {
                        Header: "Preview",
                        id: "preview",
                        Cell: row => (
                            <div className={styles.settings_img_preview}>
                                <ImageLoader srcLoaded={row.original.imageURL} />
                            </div>
                        ),
                        width: 100
                    },
                    {
                        Header: "Name",
                        id: "name",
                        Cell: row => (
                            <div className={styles.settings_columns}>
                                {row.original.name}
                            </div>
                        ),
                        style: { "white-space": "unset", "line-height": "1.5" }
                    },
                    {
                        Header: "Category",
                        id: "category",
                        Cell: row => (
                            <div className={styles.settings_columns}>
                                {row.original.category}
                            </div>
                        ),
                        width: 120
                    },
                    {
                        Header: "",
                        id: "action",
                        Cell: row => {
                            const { homeBackground } = this.state;
                            return (
                                <div className={styles.settings_columns}>
                                    <div className={styles.settings_action_column}>
                                        <div>
                                            <FontAwesomeIcon icon="edit" size="1x" />
                                        </div>
                                        <div onClick={e => this.handleChangeBackground(row.original.id)} role="presentation">
                                            <FontAwesomeIcon
                                                icon="images"
                                                size="1x"
                                                style={{ color: row.original.id === homeBackground ? "#4caf50" : "#333" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        },
                        width: 70
                    }
                ]
            }
        ]
    )

    render() {
        return (
            <Layout>
                <h2>Settings</h2>
                <div className={styles.settings_new_design_btn_contaiener}>
                    <Button
                        type="button"
                        classBtn="success"
                        onClick={this.handleAddDesignClick}
                    >
                        New
                        <FontAwesomeIcon icon="plus" size="sm" />
                    </Button>
                </div>
                <div className={styles.settings_design_list}>
                    <ReactTable
                        data={data}
                        noDataText="No data found"
                        columns={this.renderColumns()}
                        defaultPageSize={10}
                        className="-highlight"
                        resizable={false}
                        sortable={false}
                    />
                </div>
            </Layout>
        );
    }
}

export default Settings;
