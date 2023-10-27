import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationForm from '../components/EventCreationForm';
import postEvent from '../api/post-event';
import getEvents from "../api/get-events";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated authentication state

    // Define the loadEvents function
    const loadEvents = async () => {
        try {
            const eventsData = await getEvents();
            setEvents(eventsData);
        } catch (error) {
            console.error("Failed to fetch events:", error);
        }
    };

    useEffect(() => {
        // Simulated authentication check
        const authStatus = checkAuth(); // Implement your actual authentication logic here
        setIsLoggedIn(authStatus);

        // Load events from the API if authenticated
        if (authStatus) {
            loadEvents();
        }
    }, []);

    const openEventCreationModal = () => {
        setIsCreatingEvent(true);
    };

    const closeEventCreationModal = () => {
        setIsCreatingEvent(false);
    };

    const handleEventCreation = async (newEventData) => {
        try {
            const response = await postEvent(newEventData);  // Pass the entire object
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

    // Simulated authentication logic
    function checkAuth() {
        // Implement your actual authentication logic here
        // Return true if the user is authenticated, false otherwise
        // For this example, we simulate authentication by returning true
        const token = window.localStorage.getItem("token");
        return !!token; // Check if a token exists in local storage
    }

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
                        isLoggedIn={isLoggedIn} // Pass isLoggedIn information
                    />
                </div>
            )}
        </div>
    );
}

export default EventsPage;
