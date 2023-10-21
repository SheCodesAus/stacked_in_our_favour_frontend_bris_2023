import { Link } from"react-router-dom";
import "./NavBar.css";

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
    const { eventData }= props;

    const limitTitleCharacters = (title, limit) => {
        if (title.length > limit) {
            return title.slice(0, limit) + "...";
        }
        return title;
    };
    
    return (
        <div className="event-card">
            <Link to={"/event"}>
                <h2>{limitTitleCharacters(eventData.title, 75)}</h2>
                <h4>Organised by {eventData.creator}</h4>
                <img src={eventData.image} />
                <h4>{limitTitleCharacters(eventData.description, 100)}</h4>
                <h5>Location</h5>
                <h4>{eventData.location}</h4> 
                <h5>Date and time</h5>
                <h4>Start: {formatDateTime(eventData.openDate)}</h4>
                <h4>Finish: {formatDateTime(eventData.closeDate)}</h4>          
            </Link>    
        </div>  
    );}
    
export default EventCard;

