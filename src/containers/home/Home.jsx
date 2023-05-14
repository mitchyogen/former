import React from "react";
import "./home.css";

const Home = () => {
    const handleClick = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" }, false);
    };
    return (
        <section className="former__home-container">
            <div className="former__home-wrapper">
                <div className="former__home-content">
                    <h1>
                        Better Products,
                        <br />
                        through User Research.
                    </h1>
                    <p>
                        Former is a user research consultancy that helps businesses understand their customers through
                        quantitative and qualitative research.
                    </p>
                    <button className="former__home_getInTouch-btn" onClick={handleClick}>
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;
