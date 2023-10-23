import React, { useState, useEffect } from "react";
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
            setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint to 1100px
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div class="home-block">
                <div class="home-block-text">
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
                    class={`home-block-image ${
                        isMobileView ? "mobile-view" : "desktop-view"
                    }`}
                >
                    <img
                        src={stickyImage}
                        alt="Illustration of people posting sticky notes onto a board."
                        class={`shrink-image ${isMobileView ? "disappear" : ""}`}
                    />
                </div>
            </div>
            <PromoteBanner isMobileView={isMobileView} />
        </>
    );
}

export default HomePage;
