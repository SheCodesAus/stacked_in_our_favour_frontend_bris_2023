import useEvents from "../hooks/use-events";
import "./EventsPage.css";
import getEvents from '../api/get-events';
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
    const [isMobileView, setIsMobileView] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Call the useEvents function to fetch events data
    const { getEvents } = useEvents();

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

        const loadEvents = async () => {
            try {
                const eventsData = await getEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };

        loadEvents();  // Fetch the events using the getEvents function

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
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
            <div className="events-page-header">
                <h1>Events</h1>
                {isLoggedIn && ( // Conditionally render the button if the user is logged in
                    <div className="create-event-container">
                        <button className="create-event-button" onClick={openEventCreationModal}>
                            Create Event
                        </button>
                    </div>
                )}
            </div>
            
            <div id="event-list" className={isMobileView ? "mobile-view" : "desktop-view"}>
                {allEvents.map((eventData, key) => (
                    <EventCard key={key} eventData={eventData}/>
                    ))} 
                    {/* This code above populates the events which Maddy created, remove if we want to show real events */}

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