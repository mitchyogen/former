import { useState } from "react";
import "./App.css";
import { Navbar, FormerSectionTiles } from "./components";
import { Home, Contact, Footer } from "./containers";
import { DEFAULT } from "./utils";
import { APPROACH_PAGE, SERVICE_PAGE, TEAM_PAGE } from "./pages";

const App = () => {
    const [navBarBgColor, setNavBarBgColor] = useState(DEFAULT.color.orange);
    const [navBarLinkColor, setNavBarLinkColor] = useState(DEFAULT.color.dark);
    return (
        <div className="App">
            <div>
                <Navbar bgColor={navBarBgColor} linkColor={navBarLinkColor} />
                <Home />
                <FormerSectionTiles
                    id={SERVICE_PAGE.id}
                    pageTitle={SERVICE_PAGE.pageTitle}
                    details={SERVICE_PAGE.details}
                    backgroundBgColor={SERVICE_PAGE.backgroundColor}
                    textColor={SERVICE_PAGE.textColor}
                    extendBottomPadding={true}
                />
                <FormerSectionTiles
                    id={APPROACH_PAGE.id}
                    pageTitle={APPROACH_PAGE.pageTitle}
                    details={APPROACH_PAGE.details}
                    backgroundBgColor={APPROACH_PAGE.backgroundColor}
                    textColor={APPROACH_PAGE.textColor}
                />
                <FormerSectionTiles
                    id={TEAM_PAGE.id}
                    pageTitle={TEAM_PAGE.pageTitle}
                    details={TEAM_PAGE.details}
                    backgroundBgColor={TEAM_PAGE.backgroundColor}
                    textColor={TEAM_PAGE.textColor}
                />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
