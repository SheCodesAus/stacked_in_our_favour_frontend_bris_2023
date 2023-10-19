import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationPopup from '../components/EventCreationPopup'; // Create this component
import { allEvents } from "../data";
import "./EventsPage.css";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false); // New state for controlling the event creation modal

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
        <div id="event-list">
            {allEvents.map((eventData, key) => (
                <EventCard key={key} eventData={eventData} />
            ))}
            <button onClick={openEventCreationModal}>New Event</button>

            {events
                .slice()
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((eventData, key) => (
                    <EventCard key={key} eventData={eventData} />
                ))}
            {showPopup && (
                <div className="event-popup">
                    <EventCreationPopup
                        onClose={closePopup}
                        onEventCreate={handleEventCreation}
                    />
                </div>
            )}

            {isCreatingEvent && (
                <div className="event-popup">
                    <EventCreationPopup
                        onClose={closeEventCreationModal}
                        onEventCreate={handleEventCreation}
                    />
                </div>
            )}
        </div>
    );
}

export default EventsPage;
