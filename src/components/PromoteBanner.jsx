import React from "react";
import "./NavBar.css";

function PromoteBanner({ isMobileView }) {
    return (
        <>
            <ul className={`banner-block ${isMobileView ? "mobile-view" : "desktop-view"}`}>
                <div className="block-item">
                    <h3>Celebrate Wins</h3>
                    <p>Share your wins from workshops with your peers and leaders.</p>
                </div>
                <div className="block-item">
                    <h3>Engage With Peers</h3>
                    <p>Contribute and view peers' thoughts during and after workshops.</p>
                </div>
                <div className="block-item">
                    <h3>Explore Workshops</h3>
                    <p>View past, current, and upcoming workshops hosted within the SheCodes network.</p>
                </div>
            </ul>
        </>
    );
}

export default PromoteBanner;
