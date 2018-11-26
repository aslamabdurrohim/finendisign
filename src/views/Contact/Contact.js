/* eslint react/jsx-one-expression-per-line: 0*/

import React, { Component } from "react";
import Layout from "../../components/Layout";
import styles from "./Contact.module.css";
import Form from "../../components/Common/Form";
import Input from "../../components/Common/Input";
import Button from "../../components/Common/Button";

class Contact extends Component {
    state = {
        form: {
            fname: "",
            lname: "",
            email: "",
            subject: "",
            message: ""
        },
        isSubmitting: false
    };

    handleSubmit = e => {
        e.preventDefault();
        const { isSubmitting } = this.state;
        this.setState({
            isSubmitting: !isSubmitting
        });
        setTimeout(() => this.setState({ isSubmitting: false }), 3000);
    };

    handleChange = e => {
        e.preventDefault();
        const { value, name } = e.target;

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    render() {
        const { form, isSubmitting } = this.state;
        return (
            <Layout>
                <div className={styles.contact_container}>
                    <div className={styles.contact_info}>
                        <h2 className={styles.contact_title}>CONTACT ME</h2>
                        <p>Mail / Deliveries: Dan Mumford, Studio 100, Top Floor, 100 De Beauvoir Road, London N1 4EN</p>
                        <p>
                            Email:&nbsp;
                            <a href="mailto:danmumforddraws@gmail.com" target="_top">
                                danmumforddraws@gmail.com
                            </a>
                        </p>
                        <p>
                            You can follow Dan on <a href="https://www.instagram.com/miqdad_af/"> Instagram </a>, <a href="https://twitter/mqdfwz">Twitter</a> and <a href="https://www.facebook.com/miqdad.fawwaz"> Facebook </a>.
                        </p>
                    </div>
                    <div className={styles.contact_form}>
                        <Form onSubmit={this.handleSubmit} className={styles.contact_form_container}>
                            <p>Name *</p>
                            <div className={styles.contact_form_name}>
                                <div className={styles.contact_form_fname}>
                                    <label htmlFor="fname">
                                        <Input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            value={form.fname}
                                            onChange={this.handleChange}
                                        />
                                        First Name
                                    </label>
                                </div>
                                <div className={styles.contact_form_lname}>
                                    <label htmlFor="lname">
                                        <Input
                                            type="text"
                                            name="lname"
                                            id="lname"
                                            value={form.lname}
                                            onChange={this.handleChange}
                                        />
                                        Last Name
                                    </label>
                                </div>
                            </div>
                            <p>Email Address *</p>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={this.handleChange}
                            />
                            <p>Subject *</p>
                            <Input
                                type="text"
                                name="subject"
                                id="subject"
                                value={form.subject}
                                onChange={this.handleChange}
                            />
                            <p>Message *</p>
                            <Input
                                type="textarea"
                                name="message"
                                id="message"
                                value={form.message}
                                onChange={this.handleChange}
                            />
                            <Button type="submit" classBtn="submit">{isSubmitting ? "SUBMITTING..." : "SUBMIT"}</Button>
                        </Form>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Contact;
