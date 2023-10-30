import { Link } from "react-router-dom";
import "./NavBar.css";
import "./EventCard.css";

// Function to format the date and time for Australia
const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);

    const optionsDate = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        weekday: "short"
    };

    const optionsTime = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    };

    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTimeStart = date.toLocaleTimeString(undefined, optionsTime);
    date.setHours(date.getHours() + 1); // Add 1 hour to get the end time
    const formattedTimeEnd = date.toLocaleTimeString(undefined, optionsTime);

    return `${formattedDate}, ${formattedTimeStart} - ${formattedTimeEnd} `;
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
                <p>{eventData.description}</p> {/* <-- Here's where we add the description */}
                <h5>Location</h5>
                <h4>{eventData.location}</h4>
                <h5>Date and Time</h5>
                <h4>{eventData.start_datetime}</h4>
                <h4>{eventData.finish_datetime}</h4>
                <div className="button-container">
                    <div className="tooltip">
                    <span className="tooltiptext">This is a free event</span>
                    <a href className="free-button">FREE</a>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default EventCard;