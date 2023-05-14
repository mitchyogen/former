import React from "react";
import "./contact.css";
import { ContactForm } from "../../components";

const Contact = () => {
    return (
        <section className="former__contact-container" id="contact">
            <div className="former__contact-wrapper">
                <div className="former__contact-content">
                    <div className="former__contact-left">
                        <div href="#" className="former__contact-header nav">
                            CONTACT
                        </div>
                        <div className="former__contact-header-border"></div>
                        <div className="former__contact-left-content">
                            <h2>Drop us a message...</h2>
                            <p>
                                Just a few quick questions? Or, have a full brief ready to roll? We’ll get back to you
                                ASAP.{" "}
                            </p>
                            <h3>
                                Or give us a call on <br />
                                +65 8877 4054
                            </h3>
                        </div>
                    </div>
                    <div className="former__contact-right">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
