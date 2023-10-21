import { Link } from"react-router-dom";
import "./EventCard.css";

// Event Card component
function EventCard(props) {
    const { eventData }= props;
    const eventLink = `${eventData.id}`;
    
    return (
        <div className="event-card">
            {/* <Link to={"/event"}> */}
            <Link to={eventLink}>
                <h2>{eventData.title}</h2>
                <h4>Organised by {eventData.creator}</h4>
                <img src={eventData.image} />
                <h5>Location</h5>
                <h4>{eventData.location}</h4> 
                <h5>Date and time</h5>
                <h4>{eventData.openDate}</h4>
                <h4>{eventData.closeDate}</h4>          
            </Link>    
        </div>  
    );}
    
export default EventCard;