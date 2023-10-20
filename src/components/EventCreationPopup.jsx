import React, { useState } from 'react';

import "./NavBar.css";


function EventCreationPopup({ onClose, onEventCreate }) {
    const [eventData, setEventData] = useState({
        title: '',
        creator: '',
        image: '',
        description: '',
        location: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({
        ...eventData,
        [name]: value,
        });
    };

    const handleCreateEvent = () => {
        // You can add validation here before creating the event
        onEventCreate(eventData);
    };

    return (
        <div className="event-creation-popup">
            <h2>Create Your Event</h2>
            <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={eventData.title}
                onChange={handleChange}
            />
            <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
            />
            <input
                type="time"
                name="time"
                value={eventData.time}
                onChange={handleChange}
            />
            <input
                type="text"
                name="location"
                placeholder="Event Location"
                value={eventData.location}
                onChange={handleChange}
            />
            <input
                type="text"
                name="coverImageUrl"
                placeholder="Cover Image URL"
                value={eventData.coverImageUrl}
                onChange={handleChange}
            />
            <textarea
                name="description"
                placeholder="Event Description"
                value={eventData.description}
                onChange={handleChange}
            />
            <button onClick={handleCreateEvent}>Create Event</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}

export default EventCreationPopup;
