// import { allEvents } from "../data";
import useEvents from "../hooks/use-events";
import "./EventsPage.css";
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationForm from '../components/EventCreationForm'; 
import { allEvents } from "../data";
import "../components/NavBar.css";
import { useNavigate } from "react-router-dom";

function EventsPage() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const openEventCreationModal = () => {
        setIsCreatingEvent(true);
    };

    const closeEventCreationModal = () => {
        setIsCreatingEvent(false);
    };

    const handleEventCreation = (newEventData) => {
        const newEvent = {
            id: events.length + 1,
            ...newEventData,
        };

        setEvents([...events, newEvent]);
        closeEventCreationModal();
    };

    return (
        <div>
            <div className= "events-page-header">
                <h1>Events</h1>
                <button onClick={openEventCreationModal}>New Event</button>
            </div>
            
            <div id="event-list" className={isMobileView ? "mobile-view" : "desktop-view"}>
                {allEvents.map((eventData, key) => (
                    <EventCard key={key} eventData={eventData}/>
                    ))}

                {events
                    .slice()
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((eventData, key) => (
                        <EventCard key={key} eventData={eventData} />
                    ))}
                {showPopup && (
                    <div className="event-popup">
                        <EventCreationForm
                            onClose={closePopup}
                            onEventCreate={handleEventCreation}
                        />
                    </div>
                )}

                {isCreatingEvent && (
                    <div className="event-popup">
                        <EventCreationForm
                            onClose={closeEventCreationModal}
                            onEventCreate={handleEventCreation}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default EventsPage;