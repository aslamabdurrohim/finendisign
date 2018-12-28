// eslint no-console: "0"

import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-table/react-table.css";
import { data } from "../../utils/mock";
import { formValidation, submitValidation, errorClass } from "../../utils/form-validation";
import styles from "./Settings.module.css";

import Modal from "../../components/Modal";
import Button from "../../components/Common/Button";
import Alert from "../../components/Alert";
import Form from "../../components/Common/Form";
import Input from "../../components/Common/Input";
import Table from "../../components/Common/Table";
import Select from "../../components/Common/Select";

class Settings extends Component {
    state = {
        homeBackground: 2,
        imageURLInputs: [""],
        showModal: false,
        showModalEdit: false,
        form: {
            title: "",
            category: "Illustrations",
            imageURL: [""]
        },
        formErrors: {
            title: "",
            category: "",
            imageURL: [""]
        },
        formValidity: {
            title: false,
            category: false,
            imageURL: [false]
        }
    };

    dynamicImageUrlInputs = () => {
        const { form, formErrors, imageURLInputs } = this.state;
        const { imageURL } = form;

        return imageURLInputs.map((el, index) => (
            <div className={styles.settings_imageurl_wrapper} key={index}>
                <Input
                    type="text"
                    name="imageURL"
                    id="imageURL"
                    value={imageURL[index] || ""}
                    onChange={e => this.handleInputChange(e, index)}
                    className={errorClass(formErrors.imageURL[index])}
                    errorMsg={formErrors.imageURL[index]}
                    placeholder="Your design image url"
                />

                {index > 0 && (
                    <div
                        className={styles.settings_remove_imageurl_icon}
                        onClick={e => this.handleRemoveImageUrlClick(index)}
                        role="presentation"
                    >
                        <FontAwesomeIcon icon="times" size="1x" />
                    </div>
                )}

                {index === 0 && (
                    <div
                        className={styles.settings_add_imageurl_icon}
                        onClick={this.handleAddImageUrlInput}
                        role="presentation"
                    >
                        <FontAwesomeIcon icon="plus" size="1x" />
                    </div>
                )}
            </div>
        ));
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
    };

    handleAddImageUrlInput = () => {
        this.setState(
            prevState => ({
                formValidity: {
                    imageURL: [...prevState.formValidity.imageURL, false]
                },
                imageURLInputs: [...prevState.imageURLInputs, ""]
            }),
            () => this.handleSubmitValidation()
        );
    };

    handleRemoveImageUrlClick = index => {
        const { imageURLInputs, form, formValidity, formErrors } = this.state;

        const values = [...imageURLInputs];
        const inputValues = [...form.imageURL];
        const inputValidity = [...formValidity.imageURL];
        const inputErros = [...formErrors.imageURL];

        values.splice(index, 1);
        inputValues.splice(index, 1);
        inputValidity.splice(index, 1);
        inputErros.splice(index, 1);
        this.setState(
            {
                imageURLInputs: values,
                form: {
                    imageURL: inputValues
                },
                formValidity: {
                    imageURL: inputValidity
                },
                formErrors: {
                    imageURL: inputErros
                }
            },
            () => this.handleSubmitValidation()
        );
    };

    handleChangeBackground = id => {
        this.setState({
            homeBackground: id
        });

        Alert("success", "Background has been changed!");
    };

    handleCloseModal = () => this.setState({ showModal: false, showModalEdit: false });

    handleFormSubmit = e => {
        e.preventDefault();
    };

    handleSubmitValidation = () => {
        const { formValidity, form } = this.state;
        this.setState({ canSubmit: submitValidation(form, formValidity) });
    };

    handleInputChange = (e, index = 0) => {
        e.preventDefault();
        const { value, name } = e.target;
        const { formErrors, formValidity, form } = this.state;
        const { validationError, validity } = formValidation(
            name,
            value,
            formValidity,
            formErrors,
            index
        );
        const imgUrlValues = [...form.imageURL];

        if (name === "imageURL") {
            imgUrlValues[index] = value;
        }

        this.setState(
            prevState => ({
                form: {
                    ...prevState.form,
                    [name]: name === "imageURL" ? imgUrlValues : value
                },
                formErrors: validationError,
                formValidity: validity
            }),
            () => {
                this.handleSubmitValidation();
            }
        );
    };

    renderModal = () => {
        const { showModal, showModalEdit, form, formErrors, canSubmit } = this.state;
        const { title, category } = form;
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
                        value={title || ""}
                        onChange={this.handleInputChange}
                        className={errorClass(formErrors.title)}
                        errorMsg={formErrors.title}
                        placeholder="Your design title"
                    />
                    <p>Category *</p>
                    <Select
                        options={categories}
                        value={category || ""}
                        name="category"
                        onChange={this.handleInputChange}
                    />
                    <p>Image URL *</p>
                    {this.dynamicImageUrlInputs()}
                    <Button type="submit" classBtn="submit" disabled={!canSubmit}>
                        SUBMIT
                    </Button>
                </Form>
            </Modal>
        );
    };

    render() {
        const { homeBackground } = this.state;
        return (
            <Fragment>
                {this.renderModal()}
                <div className={styles.settings_container}>
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
                        <Table
                            data={data}
                            onChangeBackground={this.handleChangeBackground}
                            onEditDesignClick={this.handleEditDesignClick}
                            idBackground={homeBackground}
                            type="settings"
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Settings;
