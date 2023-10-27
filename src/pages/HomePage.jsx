import React, { useState, useEffect } from "react";
import { setLoginState } from '../components/NavBar'; // Import the function from NavBar
import "../components/NavBar.css";
import PromoteBanner from "../components/PromoteBanner";
import stickyImage from "../assets/stickyImage.svg";

const YellowText = {
    color: "#ffa300",
};

const PurpleText = {
    color: "#8246af",
};

function HomePage() {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setLoginState(token !== null);
    }, []);

    return (
        <>
            <div className="home-block">
                <div className="home-block-text">
                    <h1>
                        Celebrate WINS during your{" "}
                        <span style={{ color: PurpleText.color }}>SHE</span>
                        <span style={{ color: YellowText.color }}>&#123;CODES&#125;</span> workshops.
                    </h1>
                    <h2 style={{ marginTop: "24px" }}>
                        Share successes with your peers and mentors before, during and after workshop events!
                    </h2>
                </div>
                <div
                    className={`home-block-image ${
                        isMobileView ? "mobile-view" : "desktop-view"
                    }`}
                >
                    <img
                        src={stickyImage}
                        alt="Illustration of people posting sticky notes onto a board."
                        className={`shrink-image ${isMobileView ? "disappear" : ""}`}
                    />
                </div>
            </div>
            <PromoteBanner isMobileView={isMobileView} />
        </>
    );
}

export default HomePage;
