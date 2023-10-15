import { oneEventSticky } from "../data";
import "./EventStickyPage.css"
import StickyNote from "../components/StickyNote";

function EventStickyPage() {
    return(
        <div>
            <h1>{oneEventSticky.title}</h1>
            <h4>{oneEventSticky.dateCreated}</h4>
            <h4>{`Status: ${oneEventSticky.is_open}`}</h4>
            <button type="submit" >Create Sticky Note</button>
            <h2>Wins:</h2>
            <li>
                {oneEventSticky.sticky.map((stickyData, key) => {
                    return (
                        <div id="sticky-list">
                            <StickyNote stickyData={stickyData} />
                        </div>
                    );
                })}
            </li>
        </div>
    );
}

export default EventStickyPage;