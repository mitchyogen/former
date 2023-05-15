import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { MdOpenInNew } from "react-icons/md";
import logo from "../../logo.svg";
import "./navbar.css";
import FormerLogo from "../../assets/former-logo";
import FormerLogoAsterisk from "../../assets/former-logo-asterisk";

// Pass in color from parent component for nav text and svg
const Navbar = ({ bgColor, linkColor, logo }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleOpenModal = () => {
        setToggleMenu(true);
        document.getElementsByClassName("former__contact-form-container")[0].style.opacity = "0";
    };

    const handleCloseModal = () => {
        setToggleMenu(false);
        document.getElementsByClassName("former__contact-form-container")[0].style.opacity = "1";
    };

    return (
        <div className="former__navbar" style={{ backgroundColor: bgColor }}>
            <div className="former__navbar-links">
                <div className="former__navbar-links_logo">
                    {logo === "small" ? <FormerLogoAsterisk fill={linkColor} /> : <FormerLogo />}
                </div>
                <div className="former__navbar-links_container">
                    <div className="former__navbar-links_p" style={{ color: linkColor }}>
                        <p>
                            <a href="#services">Services</a>
                        </p>
                        <p>
                            <a href="#approach">Approach</a>
                        </p>
                        <p>
                            <a href="#team">Team</a>
                        </p>
                        <p>
                            <a href="#contact">Contact</a>
                        </p>
                    </div>
                    <div className="former__navbar-menu">
                        <RiMenuLine color={linkColor} size={27} onClick={handleOpenModal} />
                        {toggleMenu && (
                            <div className="former__navbar-menu_container scale-up-center">
                                <div className="former__navbar-menu-overlay-top">
                                    <div className="former__navbar-menu_overlay-close-icon">
                                        <RiCloseLine color="#000" size={27} onClick={handleCloseModal} />
                                    </div>
                                    <div className="former__navbar-menu_overlay">
                                        <div className="former__navbar-menu_container-links">
                                            <p>
                                                <a className="overlay-link" href="#services" onClick={handleCloseModal}>
                                                    Services
                                                </a>
                                            </p>
                                            <p>
                                                <a className="overlay-link" href="#approach" onClick={handleCloseModal}>
                                                    Approach
                                                </a>
                                            </p>
                                            <p>
                                                <a className="overlay-link" href="#team" onClick={handleCloseModal}>
                                                    Team
                                                </a>
                                            </p>
                                            <p>
                                                <a className="overlay-link" href="#journal" onClick={handleCloseModal}>
                                                    Journal
                                                </a>
                                                <MdOpenInNew style={{ marginLeft: 4 }} />
                                            </p>
                                            <p>
                                                <a className="overlay-link" href="#careers" onClick={handleCloseModal}>
                                                    Careers
                                                </a>
                                                <MdOpenInNew style={{ marginLeft: 4 }} />
                                            </p>
                                            <p>
                                                <a className="overlay-link" href="#contact" onClick={handleCloseModal}>
                                                    Contact
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
