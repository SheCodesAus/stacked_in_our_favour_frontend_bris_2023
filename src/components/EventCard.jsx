import { Link } from "react-router-dom";
import "./NavBar.css";
import "./EventCard.css";

// Function to format the date and time for Australia
const formatDateTime = (dateTimeString) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
    };
    const date = new Date(dateTimeString);
    return date.toLocaleDateString("en-AU", options);
};

// Event Card component
function EventCard(props) {
    console.log("EventCard is being rendered");
    const { eventData } = props;

    const limitTitleCharacters = (title, limit) => {
        if (title.length > limit) {
            return title.slice(0, limit) + "...";
        }
        return title;
    };
    
    console.log("Event ID in EventCard: ", eventData);
    const eventLink = `/events/${eventData.id}`;

    return (
        <div className="event-card">
            <Link to={eventLink}>
                <h2>{eventData.title}</h2>
                <h4>Organised by {eventData.creator}</h4>
                <img src={eventData.image} />
                <h5>Location</h5>
                <h4>{eventData.location}</h4>
                <h5>Date and time</h5>
                <h4>Start: {formatDateTime(eventData.openDate)}</h4>
                <h4>Finish: {formatDateTime(eventData.closeDate)}</h4>
            </Link>
        </div>
    );
}

export default EventCard;