import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EventCreationForm from '../components/EventCreationForm';
import '../pages/EventsPage.css';
import postEvent from '../api/post-event';
import getEvents from '../api/get-events';
import "./EventsPage.css";

function EventsPage() {
    const [events, setEvents] = useState([]);
    const [isCreatingEvent, setIsCreatingEvent] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(''); // State for handling error messages

    const loadEvents = async () => {
        try {
            const eventsData = await getEvents();
            setEvents(eventsData);
        } catch (error) {
            console.error('Failed to fetch events:', error);
        }
    };

    useEffect(() => {
        const authStatus = checkAuth();
        setIsLoggedIn(authStatus);
        if (authStatus) {
            loadEvents();
        }
    }, []);

    const openEventCreationModal = () => {
        setIsCreatingEvent(true);
        setError(''); // Reset the error message when opening the modal
    };

    const closeEventCreationModal = () => {
        setIsCreatingEvent(false);
    };

    const handleEventCreation = async (newEventData) => {
        try {
            const response = await postEvent(newEventData);
            const newEvent = {
                id: response.id,
                ...newEventData,
            };
            setEvents([...events, newEvent]);
            closeEventCreationModal();
            setError(''); // Clear the error message on successful event creation
        } catch (error) {
            const username = window.localStorage.getItem('username'); // Retrieve the username from local storage
            let errorMessage = 'An error occurred while creating the event. Please try again later.';
            if (error.message === "You do not have permission to perform this action.") {
                errorMessage = `Sorry, ${username}, only SheCodes organiser's can create events - Click on an event to add a sitcky note instead.`;
            }
            setError(errorMessage);
            console.error('Failed to create event:', error);
        }
    };

    function checkAuth() {
        const token = window.localStorage.getItem('token');
        return !!token;
    }

    return (
        <div>
            {error && <div className="error-message">{error}</div>}
            <div>
                {isLoggedIn && (
                    <div className="create-event-container">
                        <button className="create-event-button" onClick={openEventCreationModal}>
                            Create Event
                        </button>
                    </div>
                )}
            </div>
            <div id="event-page-details">
                <h1>Events</h1>
                <h6>
                    She Codes is a movement empowering women to code and offers pathways into tech careers by organizing free programming workshops and events. WinStack helps to support the workshops by creating an inclusive space for everyone to share their wins.
                </h6>
            </div>
            <div id="event-list">
                {events.map((eventData, index) => (
                    <EventCard key={index} eventData={eventData} />
                ))}
            </div>
            {isCreatingEvent && (
                <div className="event-popup">
                    <EventCreationForm
                        onClose={closeEventCreationModal}
                        onEventCreate={handleEventCreation}
                        isLoggedIn={isLoggedIn}
                    />
                </div>
            )}
        </div>
    );
}

export default EventsPage;
