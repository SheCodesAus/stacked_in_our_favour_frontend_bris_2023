import "./main.css"
import PromoteBanner from "../components/PromoteBanner";
import stickyImage from "../assets/stickyImage.svg";

const YellowText = {
    color: "#F9A426",
};

const PurpleText = {
    color: "#8246AF",
};

function HomePage() {
    return (
        <>
            <div class="home-block">
                <div class="home-block-text">
                    <h1>Celebrate wins during your <span style={{color: PurpleText.color}}>SHE</span><span style={{color: YellowText.color}}>&#123;CODES&#125;</span> workshops.</h1>
                    <h2>Share successes with your peers and mentors before, during and after workshop events! </h2>
                </div>
                <div class="home-block-image">
                    <img src={stickyImage} alt="Illustration of people posting sticky notes onto a board." />
                </div>
            </div>
            <PromoteBanner />
        </>
    )
}

export default HomePage;