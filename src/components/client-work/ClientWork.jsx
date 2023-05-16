import { Box } from "@mui/material";
import React from "react";
import { DEFAULT } from "../../utils";

import FormerLogoAsterisk from "../../assets/former-logo-asterisk";

import "./client-work.css";

const listItems = [
    {
        title: "Research",
        info: "A bespoke combination of qualitative and/or quantitative research methods.",
    },
    {
        title: "Reports",
        info: "Insights and recommendations delivered in a way that makes sense for you.",
    },
    {
        title: "Analysis",
        info: "A deep dive into the outputs of the research and other data points.",
    },
    {
        title: "Workshops",
        info: "We help you translate your insights and recommendations into practical next steps..",
    },
];

const renderList = listItems.map((item) => {
    return (
        <div className="item" key={item.title}>
            <h3>{item.title}</h3>
            <div className="former__client-border"></div>
            <div className="list">{item.info}</div>
        </div>
    );
});

const ClientWork = () => {
    return (
        <Box className="former__client-container">
            <div className="former__client-wrapper">
                <div className="former__client-content">
                    <div className="former__client-content-left">
                        <h2>We work with our clients in a variety of ways</h2>
                        <div className="former__client-asterisk">
                            <FormerLogoAsterisk fill={DEFAULT.color.orange} />
                        </div>
                    </div>
                    <div className="former__client-content-right">{renderList}</div>
                </div>
            </div>
        </Box>
    );
};

export default ClientWork;
