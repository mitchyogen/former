import React from "react";
import FormerLogoAsterisk from "../../assets/former-logo-asterisk";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./footer.css";
import { DEFAULT } from "../../utils";

const FOOTER_DETAILS = {
    street: "68 Circular Road",
    unitAndPostalCode: "#02-01, 049422",
    country: "Singapore",
    email: {
        label: "studio@former.sg",
        url: "mailto:studio@former.sg",
    },
    contact: {
        label: "+65 8888 8888",
        url: "tel:+6588888888",
    },
    social: {
        linkedIn: {
            label: "LinkedIn",
            url: "https://linkedin.com/company/formersg",
        },
        instagram: {
            label: "Instagram",
            url: "https://instagram.com/former_sg",
        },
        spotify: {
            label: "Spotify",
            url: "https://open.spotify.com/playlist/7AfVYy3edF037jp7Ujk1Bu?si=3477cf83580f4f12",
        },
    },
    companyName: "Former 2023",
    companyRegNo: "UEN/GST101010101A",
};

const Footer = ({ display = "main" }) => {
    return (
        <footer className={"former__footer-container " + display}>
            <div className={"former__footer-wrapper " + display}>
                <div
                    className="former__footer-backToTop-container"
                    style={{ display: display === "overlay" ? "none" : "flex" }}
                >
                    <a href="#" className="former__footer-backToTop">
                        <div className="former__footer-backToTop-arrowUp">
                            <MdKeyboardArrowUp size={40} />
                        </div>
                        <div className="former__footer-backToTop-text">Back to Top</div>
                    </a>
                </div>
                <div className="former__footer-links-wrapper">
                    <div className="former__footer-links-left-column">
                        <div className="former__footer-logo">
                            <FormerLogoAsterisk fill={DEFAULT.color.dark} />
                        </div>
                        <div className="former_footer-grid">
                            <div></div>
                            <div className="former__footer-address">{FOOTER_DETAILS.street}</div>
                            <a
                                href={FOOTER_DETAILS.social.linkedIn.url}
                                target="_blank"
                                rel="noreferrer"
                                className="former__footer-social"
                            >
                                {FOOTER_DETAILS.social.linkedIn.label}
                            </a>
                            <a href={FOOTER_DETAILS.contact.url} className="former__footer-contact">
                                {FOOTER_DETAILS.contact.label}
                            </a>
                            <div className="former__footer-address">{FOOTER_DETAILS.unitAndPostalCode}</div>
                            <a
                                href={FOOTER_DETAILS.social.instagram.url}
                                target="_blank"
                                rel="noreferrer"
                                className="former__footer-social"
                            >
                                {FOOTER_DETAILS.social.instagram.label}
                            </a>
                            <a href={FOOTER_DETAILS.email.url} className="former__footer-email">
                                {FOOTER_DETAILS.email.label}
                            </a>
                            <div className="former__footer-address">Singapore</div>
                            <a
                                href={FOOTER_DETAILS.social.spotify.url}
                                target="_blank"
                                rel="noreferrer"
                                className="former__footer-social"
                            >
                                {FOOTER_DETAILS.social.spotify.label}
                            </a>
                        </div>
                    </div>
                    <div className="former__footer-links-right-column">
                        <div>&copy; {FOOTER_DETAILS.companyName}</div>
                        <div>{FOOTER_DETAILS.companyRegNo}</div>
                    </div>
                    {/* The below footer will load in mobile only with a different grid config */}
                    <div className="former_footer-grid mobile-only">
                        <FormerLogoAsterisk />
                        <div></div>
                        <a href={FOOTER_DETAILS.contact.url} className="former__footer-contact">
                            {FOOTER_DETAILS.contact.label}
                        </a>
                        <a href={FOOTER_DETAILS.email.url} className="former__footer-email">
                            {FOOTER_DETAILS.email.label}
                        </a>
                        <div className="former__footer-address-container">
                            <div className="former__footer-address">{FOOTER_DETAILS.street}</div>
                            <div className="former__footer-address">{FOOTER_DETAILS.unitAndPostalCode}</div>
                            <div className="former__footer-address">{FOOTER_DETAILS.country}</div>
                        </div>
                        <div className="former__footer-social-container">
                            <a href={FOOTER_DETAILS.social.linkedIn.url} className="former__footer-social">
                                {FOOTER_DETAILS.social.linkedIn.label}
                            </a>
                            <a href={FOOTER_DETAILS.social.instagram.url} className="former__footer-social">
                                {FOOTER_DETAILS.social.instagram.label}
                            </a>
                            <a href={FOOTER_DETAILS.social.spotify.url} className="former__footer-social">
                                {FOOTER_DETAILS.social.spotify.label}
                            </a>
                        </div>
                        <div className="former__footer-former-registration-container">
                            <a href="#" className="former__footer-registration">
                                &copy; {FOOTER_DETAILS.companyName}
                            </a>
                            <a href="#" className="former__footer-registration">
                                {FOOTER_DETAILS.companyRegNo}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
