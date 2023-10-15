import { allEvents } from "../data";
import EventCard from "../components/EventCard";
import "./EventsPage.css";

function EventsPage() {
    return(
        <div id="event-list">
            {allEvents.map((eventData, key) => {
                return <EventCard key={key} eventData={eventData} />;
            })}
        </div>
    );
}

export default EventsPage;