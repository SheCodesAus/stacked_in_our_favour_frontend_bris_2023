// import { allEvents } from "../data";
import useEvents from "../hooks/use-events";
import EventCard from "../components/EventCard";
import "./EventsPage.css";

// events page
function EventsPage() {
    const { events } = useEvents();

    return(
        <div id="event-list">
            {/* {allEvents.map((eventData, key) => { */}
            {events.map((eventData, key) => {
                return <EventCard key={key} eventData={eventData} />;
            })}
        </div>
    );
}

export default EventsPage;