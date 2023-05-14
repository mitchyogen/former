import React from "react";
import "./contact-form.css";
import { TextField } from "@mui/material";

const ContactForm = () => {
    return (
        <section id="contact" className="former__contact-form-container">
            <div className="former__contact-form-wrapper">
                <TextField id="name" label="Name" variant="standard" />
                <TextField id="company" label="Company" variant="standard" />
                <div className="textfield-half-width">
                    <TextField id="email" label="Email" variant="standard" />
                    <TextField id="phone" label="Phone" variant="standard" />
                </div>
                <TextField id="message" label="How can we help?" variant="standard" multiline rows={6} />
                <div className="button-container">
                    <button className="former__home_send-btn">Send</button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
