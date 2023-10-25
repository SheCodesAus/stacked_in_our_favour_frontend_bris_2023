// import { allEvents } from "../data";
import useEvents from "../hooks/use-events";
import "./EventsPage.css";
import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationForm from '../components/EventCreationForm'; 
import { allEvents } from "../data";
import "../components/NavBar.css";
import { useNavigate } from "react-router-dom";
import postEvent from '../api/post-event';
import getEvents from "../api/get-events"

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

        const loadEvents = async () => {
            try {
                const eventsData = await getEvents();
                setEvents(eventsData);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            }
        };

        loadEvents();  // Fetch the events from the backend

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

    const handleEventCreation = async (newEventData) => {
        try {
            const response = await postEvent(
                newEventData.title,
                newEventData.description,
                newEventData.image,
                // Add other fields as needed
            );
            
            // Assuming the id of the new event is returned in the response
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
                <button onClick={openEventCreationModal}>Create Event</button>
            </div>
            
            <div id="event-list" className={isMobileView ? "mobile-view" : "desktop-view"}>
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