// import Celebrate from "../img/celebrate.png";
// import Engage from "../img/Engage.png";
import "./PromoteBanner.css"

function PromoteBanner() {
    return (
        <>
            <ul className="banner-block">
                <div className="block-item">
                    {/* <img src={Celebrate} alt="Icon of confetti." /> */}
                    <h3>Celebrate Wins</h3>
                    <p>Share your wins from workshops with your peers and leaders.</p>
                </div>
                <div className="block-item">
                    {/* <img src={Engage} alt="Icon of three people and a heart behind them." /> */}
                    <h3>Engage With Peers</h3>
                    <p>Contribute and view peers thoughts during and after workshops.</p>
                </div>
                <div className="block-item">
                    {/* <img src={Explore} alt="Icon of a graduation cap." /> */}
                    <h3>Explore Workshops</h3>
                    <p>View past, current and upcoming workshops hosted within the SheCodes network.</p>
                </div>
            </ul>
        </>
    );
}
export default PromoteBanner;