// eslint no-console: "0"

import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { data } from "../../utils/mock";
import { formValidation, submitValidation, errorClass } from "../../utils/form-validation";
import styles from "./Settings.module.css";

import ImageLoader from "../../components/ImageLoader";
import Modal from "../../components/Modal";
import Layout from "../../components/Layout";
import Button from "../../components/Common/Button";
import Alert from "../../components/Alert";
import Form from "../../components/Common/Form";
import Input from "../../components/Common/Input";
import Select from "../../components/Common/Select";

class Settings extends Component {
    state = {
        homeBackground: 2,
        showModal: false,
        showModalEdit: false,
        form: {
            title: "",
            category: "Illustrations",
            imageURL: ""
        },
        formErrors: {
            title: "",
            category: "Illustrations",
            imageURL: ""
        },
        formValidity: {
            title: false,
            category: false,
            imageURL: false
        }
    };

    handleAddDesignClick = () => {
        const { showModal } = this.state;
        this.setState({
            showModal: !showModal
        });
    };

    handleEditDesignClick = () => {
        const { showModalEdit } = this.state;
        this.setState({
            showModalEdit: !showModalEdit
        });
    }

    handleChangeBackground = id => {
        this.setState({
            homeBackground: id
        });

        Alert("success", "Background has been changed!");
    }

    handleCloseModal = () => this.setState({ showModal: false, showModalEdit: false });

    handleFormSubmit = e => {
        e.preventDefault();
    }

    handleInputChange = e => {
        e.preventDefault();
        const { value, name } = e.target;
        const { formErrors, formValidity, form } = this.state;
        const { validationError, validity } = formValidation(name, value, formValidity, formErrors);
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            },
            formErrors: validationError,
            formValidity: validity
        }), () => {
            this.setState({ canSubmit: submitValidation(form, formValidity) });
        });
    }

    renderModal = () => {
        const { showModal, showModalEdit, form, formErrors, canSubmit } = this.state;
        const { title, category, imageURL } = form;
        const categories = [
            {
                name: "Illustrations",
                value: "Illustrations"
            },
            {
                name: "Logo",
                value: "logo"
            }
        ];
        return (
            <Modal
                show={showModal || showModalEdit}
                onClose={this.handleCloseModal}
                title={showModal ? "New Design" : "Edit Design"}
            >
                <Form onSubmit={this.handleFormSubmit} className={styles.settings_modal_form}>
                    <p>Title *</p>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={this.handleInputChange}
                        className={errorClass(formErrors.title)}
                        errorMsg={formErrors.title}
                        placeholder="Your design title"
                    />
                    <p>Category *</p>
                    <Select
                        options={categories}
                        value={category}
                        name="category"
                        onChange={this.handleInputChange}
                    />
                    <p>Image URL *</p>
                    <Input
                        type="text"
                        name="imageURL"
                        id="imageURL"
                        value={imageURL}
                        onChange={this.handleInputChange}
                        className={errorClass(formErrors.imageURL)}
                        errorMsg={formErrors.imageURL}
                        placeholder="Your design image url"
                    />
                    <Button
                        type="submit"
                        classBtn="submit"
                        disabled={!canSubmit}
                    >
                    SUBMIT
                    </Button>
                </Form>
            </Modal>
        );
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
                                        <div onClick={this.handleEditDesignClick} role="presentation">
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
            <Fragment>
                {this.renderModal()}
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
            </Fragment>
        );
    }
}

export default Settings;
