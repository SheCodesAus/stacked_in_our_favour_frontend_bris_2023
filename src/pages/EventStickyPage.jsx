import { oneEventSticky } from "../data";
import "./EventStickyPage.css"
import StickyNote from "../components/StickyNote";
import StickyNoteForm from "../components/StickyNoteForm";

// sticky note events page
function EventStickyPage() {
    return(
        <div>
            <h1>{oneEventSticky.title}</h1>
            <h4>{oneEventSticky.dateCreated}</h4>
            <h4>{`Status: ${oneEventSticky.is_open}`}</h4>
            <a href="/stickynoteform">+ Create Sticky Note</a>    
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