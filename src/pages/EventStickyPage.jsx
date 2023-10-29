// import { oneEventSticky } from "../data";
import { useParams } from "react-router-dom";
import useEvent from "../hooks/use-event";
import "../components/Dialog.css";
import "./EventStickyPage.css";
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
            <div id="sticky-page-details">   
                <div className="create-event-container">
                    <a href="/sticky-notes" className="create-event-button" >Create Sticky Note</a>
                    <a href="" className="create-update-button" >Update Event</a>
                </div> 
                <h1>{event.title}</h1>
                <h4>Organised by {event.creator}</h4>
            
            <div class="event-secondary-details">
                <h6>{event.description}</h6>
                <h4>{event.dateCreated}</h4>
                {/* <h4>{`Status: ${oneEventSticky.is_open}`}</h4> */}
                </div>
                {/* <h3>Stack your win and let's celebrate!</h3> */}
            </div>
            <div id="sticky-list">
                {event.stickyNotes.map((stickyData, key) => {
                    return <StickyNote stickyData={stickyData} key={key} />;
                })}
            </div>
        </div>
    );
}

export default EventStickyPage;