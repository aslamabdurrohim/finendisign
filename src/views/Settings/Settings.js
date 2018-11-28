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

class Settings extends Component {
    state = {
        homeBackground: 2
    };

    handleAddDesignClick = () => {

    }

    renderColumns = () => (
        [
            {
                Header: "Preview",
                accessor: "imageURL",
                columns: [
                    {
                        Cell: row => (
                            <div className={styles.settings_img_preview}>
                                <ImageLoader srcPreloaded={row.original.imageURL} srcLoaded={row.original.imageURL} />
                            </div>
                        ),
                        width: 100
                    }
                ]
            },
            {
                Header: "Name",
                accessor: "name",
                columns: [{
                    Cell: row => (
                        <div className={styles.settings_columns}>
                            {row.original.name}
                        </div>
                    ),
                    style: { "white-space": "unset", "line-height": "1.5" }
                }]
            },
            {
                Header: "Category",
                accessor: "category",
                columns: [{
                    Cell: row => (
                        <div className={styles.settings_columns}>
                            {row.original.category}
                        </div>
                    ),
                    width: 120
                }]
            },
            {
                Header: "",
                columns: [
                    {
                        Cell: row => {
                            const { homeBackground } = this.state;
                            return (
                                <div className={styles.settings_columns}>
                                    <div className={styles.settings_action_column}>
                                        <div>
                                            <FontAwesomeIcon icon="edit" size="1x" />
                                        </div>
                                        <div>
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
                        columns={this.renderColumns()}
                        defaultPageSize={5}
                        className="-highlight"
                        resizable={false}
                    />
                </div>
            </Layout>
        );
    }
}

export default Settings;
