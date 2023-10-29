import React from "react";
import "./NavBar.css";

// Import the small images
import celebrateImage from "../img/celebrate.png";
import engageImage from "../img/engage.png";
import exploreImage from "../img/explore.png";

function PromoteBanner({ isMobileView }) {
    return (
        <>
            <ul className={`banner-block ${isMobileView ? "mobile-view" : "desktop-view"}`}>
                <div className="block-item">
                    <img
                        src={celebrateImage}
                        alt="Celebrate Image"
                        className="small-image"
                    />
                    <h3>Celebrate Wins</h3>
                    <p>Share your wins from workshops with your peers and leaders.</p>
                </div>
                <div className="block-item">
                    <img
                        src={engageImage}
                        alt="Engage Image"
                        className="small-image"
                    />
                    <h3>Engage With Peers</h3>
                    <p>Contribute and view peers' thoughts during and after workshops.</p>
                </div>
                <div className="block-item">
                    <img
                        src={exploreImage}
                        alt="Explore Image"
                        className="small-image"
                    />
                    <h3>Explore Workshops</h3>
                    <p>View past, current, and upcoming workshops hosted within the SheCodes network.</p>
                </div>
            </ul>
        </>
    );
}

export default PromoteBanner;

