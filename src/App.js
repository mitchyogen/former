import React, { useState, useEffect, useMemo, useRef } from "react";
import "./App.css";
import { Navbar, FormerSectionTiles } from "./components";
import { Home, Contact, Footer } from "./containers";
import { DEFAULT } from "./utils";
import { APPROACH_PAGE, SERVICE_PAGE, TEAM_PAGE } from "./pages";

const App = () => {
    const [navBarBgColor, setNavBarBgColor] = useState(DEFAULT.color.orange);
    const [navBarLinkColor, setNavBarLinkColor] = useState(DEFAULT.color.dark);
    const [logoType, setLogoType] = useState("default");

    const homeRef = useRef(null);
    const serviceRef = useRef(null);
    const approachRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const scrollHandler = () => {
        if (window.pageYOffset + 61 > 80) {
            setLogoType("small");
        } else {
            setLogoType("default");
        }
        if (
            window.pageYOffset + 61 >= homeRef.current.offsetHeight &&
            window.pageYOffset + 61 <= serviceRef.current.offsetHeight + homeRef.current.offsetHeight
        ) {
            // Service section is visible
            setNavBarBgColor(DEFAULT.color.dark);
            setNavBarLinkColor("white");
        } else if (
            window.pageYOffset + 61 >= homeRef.current.offsetHeight + serviceRef.current.offsetHeight &&
            window.pageYOffset + 61 <=
                serviceRef.current.offsetHeight + homeRef.current.offsetHeight + approachRef.current.offsetHeight
        ) {
            // Approach section is visible
            setNavBarBgColor(DEFAULT.color.grey);
            setNavBarLinkColor(DEFAULT.color.dark);
        } else if (
            window.pageYOffset + 61 >=
                homeRef.current.offsetHeight + serviceRef.current.offsetHeight + approachRef.current.offsetHeight &&
            window.pageYOffset + 61 <=
                serviceRef.current.offsetHeight +
                    homeRef.current.offsetHeight +
                    approachRef.current.offsetHeight +
                    teamRef.current.offsetHeight
        ) {
            // Team  section is visible
            setNavBarBgColor(DEFAULT.color.dark);
            setNavBarLinkColor(DEFAULT.color.white);
        } else if (
            window.pageYOffset + 61 >=
                homeRef.current.offsetHeight +
                    serviceRef.current.offsetHeight +
                    approachRef.current.offsetHeight +
                    teamRef.current.offsetHeight &&
            homeRef.current.offsetHeight +
                serviceRef.current.offsetHeight +
                approachRef.current.offsetHeight +
                teamRef.current.offsetHeight +
                contactRef.current.offsetHeight
        ) {
            // Contact section is visible
            setNavBarBgColor(DEFAULT.color.white);
            setNavBarLinkColor(DEFAULT.color.dark);
        } else {
            // default: Home page is visible
            setNavBarBgColor(DEFAULT.color.orange);
            setNavBarLinkColor(DEFAULT.color.dark);
        }
    };

    return (
        <div className="App">
            <div>
                <Navbar bgColor={navBarBgColor} linkColor={navBarLinkColor} logo={logoType} />
                <div ref={homeRef}>
                    <Home />
                </div>
                <div ref={serviceRef}>
                    <FormerSectionTiles
                        id={SERVICE_PAGE.id}
                        pageTitle={SERVICE_PAGE.pageTitle}
                        details={SERVICE_PAGE.details}
                        backgroundBgColor={SERVICE_PAGE.backgroundColor}
                        textColor={SERVICE_PAGE.textColor}
                        extendBottomPadding={true}
                    />
                </div>
                <div ref={approachRef}>
                    <FormerSectionTiles
                        id={APPROACH_PAGE.id}
                        pageTitle={APPROACH_PAGE.pageTitle}
                        details={APPROACH_PAGE.details}
                        backgroundBgColor={APPROACH_PAGE.backgroundColor}
                        textColor={APPROACH_PAGE.textColor}
                    />
                </div>
                <div ref={teamRef}>
                    <FormerSectionTiles
                        id={TEAM_PAGE.id}
                        pageTitle={TEAM_PAGE.pageTitle}
                        details={TEAM_PAGE.details}
                        backgroundBgColor={TEAM_PAGE.backgroundColor}
                        textColor={TEAM_PAGE.textColor}
                    />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
