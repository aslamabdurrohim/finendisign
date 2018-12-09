import React from "react";
import ReactTable from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import ImageLoader from "../../ImageLoader";

import styles from "./Table.module.css";

const settingsColumns = (onEditDesignClick, onChangeBackground, idBackground) => (
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
                    Cell: row => (
                        <div className={styles.settings_columns}>
                            <div className={styles.settings_action_column}>
                                <div onClick={onEditDesignClick} role="presentation">
                                    <FontAwesomeIcon icon="edit" size="1x" />
                                </div>
                                <div onClick={e => onChangeBackground(row.original.id)} role="presentation">
                                    <FontAwesomeIcon
                                        icon="images"
                                        size="1x"
                                        style={{ color: row.original.id === idBackground ? "#4caf50" : "#333" }}
                                    />
                                </div>
                            </div>
                        </div>
                    ),
                    width: 70
                }
            ]
        }
    ]
);

const Table = ({
    data,
    onChangeBackground,
    onEditDesignClick,
    idBackground,
    type
}) => (
    <ReactTable
        data={data}
        noDataText="No data found"
        columns={type === "settings" ? settingsColumns(onEditDesignClick, onChangeBackground, idBackground) : null}
        defaultPageSize={10}
        className="-highlight"
        resizable={false}
        sortable={false}
    />
);

Table.protoTypes = {
    data: PropTypes.object.isRequired,
    onChangeBackground: PropTypes.func,
    onEditDesignClick: PropTypes.func,
    idBackground: PropTypes.number,
    type: PropTypes.string.isRequired
};

Table.defaultProps = {
    onChangeBackground: null,
    onEditDesignClick: null,
    idBackground: null
};

export default Table;
