import React from "react";
import "./services.css";

const Services = () => {
    return (
        <section className="former__services-container" id="services">
            <div className="former__services-wrapper">
                <a href="#" className="former__services-header">
                    SERVICES
                </a>
                <div className="former__services-header-border"></div>
                <div className="former__services-content">
                    <h2 className="former__services-title">
                        Informed Business Decisions, <br />
                        from Actionable Insights.
                    </h2>
                    <p className="former__services-details">
                        At Former, our user-centred approach to research focuses on understanding the needs,
                        preferences, and behaviours of your target audience. We believe that by gaining deep insights
                        into your users, we can help you build better products and services that meet your customers
                        needs. We might be new, but you may know us by our past work for companies like Indeed.com,
                        Cathay Pacific, Shangri-La Hotels & Resorts, Porsche and many more.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
