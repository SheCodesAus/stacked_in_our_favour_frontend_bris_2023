import useEvents from "../hooks/use-events";
import "./EventsPage.css";
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationForm from '../components/EventCreationForm'; 
import { allEvents } from "../data";
import "../components/NavBar.css";
import "../components/EventCard.css";
import "../components/EventCard";
import { useNavigate } from "react-router-dom";
import postEvent from '../api/post-event';
import getEvents from "../api/get-events"

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    useEffect(() => {
        // Simulated authentication check
        const authStatus = true; // Replace this with your actual authentication logic
        setIsLoggedIn(authStatus);

        const loadEvents = async () => {
            try {
                const eventsData = await getEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };

        loadEvents();
    }, []);

    const openEventCreationModal = () => {
        setIsCreatingEvent(true);
    };

    const closeEventCreationModal = () => {
        setIsCreatingEvent(false);
    };

    const handleEventCreation = async (newEventData) => {
        try {
            const response = await postEvent(
                newEventData.title,
                newEventData.description,
                newEventData.image
            );
            const newEvent = {
                id: response.id,
                ...newEventData,
            };
            setEvents([...events, newEvent]);
            closeEventCreationModal();
        } catch (error) {
            console.error("Failed to create event:", error);
        }
    };

    return (
        <div>
            <h1>Events</h1>
            {isLoggedIn && (
                <div className="create-event-container">
                    <button className="create-event-button" onClick={openEventCreationModal}>
                        Create Event
                    </button>
                </div>
            )}
            <div id="event-list">
                {events.map((eventData, key) => (
                    <EventCard key={key} eventData={eventData} />
                ))}
            </div>
            {isCreatingEvent && (
                <div className="event-popup">
                    <EventCreationForm
                        onClose={closeEventCreationModal}
                        onEventCreate={handleEventCreation}
                    />
                </div>
            )}
        </div>
    );
}

export default EventsPage;