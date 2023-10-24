import React, { useState } from 'react';

import "./NavBar.css";
import "./Form.css";
import "./Dialog.css";

function EventCreationForm({ onClose, onEventCreate }) {
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
        onEventCreate(eventData);
    };

    return (
        <form>
            <div className="event-creation-popup">
                <div className='dialog'>
                    <div className='row-1'>
                        <h2 className='item-1'>Create Event</h2>
                        {/* Close button */}
                        <button onClick={onClose} className='item-2 close-button'>X</button>
                    </div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Event Title"
                        value={eventData.title}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Event Description"
                        value={eventData.description}
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
                        name="image"
                        placeholder="Cover Image"
                        value={eventData.image}
                        onChange={handleChange}
                    />
                    <button onClick={handleCreateEvent}>Create Event</button>
                </div>
            </div>
        </form>
    );
}

export default EventCreationForm;
