import React from "react";
import "./former-section-tiles.css";

const FormerSectionTiles = ({ id, pageTitle, details, backgroundBgColor, textColor, extendBottomPadding = false }) => {
    return (
        <section className="former__section-tiles-container" id={id} style={{ backgroundColor: backgroundBgColor }}>
            <div
                className={
                    "former__section-tiles-wrapper " +
                    (extendBottomPadding ? "extend-bottom-padding" : "default-bottom-padding")
                }
            >
                <div className="former__section-tiles-header nav" style={{ color: textColor }}>
                    {id}
                </div>
                <div
                    className="former__section-tiles-header-border"
                    style={{ borderTop: `2px solid ${textColor}` }}
                ></div>
                <div className="former__section-tiles-content">
                    <h2 className="former__section-tiles-title" style={{ color: textColor }}>
                        {pageTitle.map((title) => (
                            <div>{title}</div>
                        ))}
                    </h2>
                    <p className="former__section-tiles-details" style={{ color: textColor }}>
                        {details}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FormerSectionTiles;
