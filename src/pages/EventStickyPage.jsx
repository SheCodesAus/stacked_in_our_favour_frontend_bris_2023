// import { oneEventSticky } from "../data";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/use-event";

import "./EventStickyPage.css"
import StickyNote from "../components/StickyNote";
// import StickyNoteForm from "../components/StickyNoteForm";

// sticky note events page
function EventStickyPage() {
    const { id } = useParams();
    console.log("Event ID in EventStickyPage: ", id);
    const { event, isLoading, error } = useEvent(id);
    window.localStorage.setItem('currentEventId', id);
  
    if (isLoading) {
        return <p>loading...</p>
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    return(
        <div>
            {/* <h1>{oneEventSticky.title}</h1>
            <h4>{oneEventSticky.dateCreated}</h4>
            <h4>{`Status: ${oneEventSticky.is_open}`}</h4>
            <a href="/stickynoteform">+ Create Sticky Note</a>    
            <h2>Wins:</h2>
            <li>
                {oneEventSticky.sticky.map((stickyData, key) => { */}
            <h1>{event.title}</h1>
            <h4>{event.dateCreated}</h4>
            {/* <h4>{`Status: ${oneEventSticky.is_open}`}</h4> */}
            <a href="/sticky-notes">+ Create Sticky Note</a>    
            <h2>Wins:</h2>
            <li>
                {event.stickyNotes.map((stickyData, key) => {
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