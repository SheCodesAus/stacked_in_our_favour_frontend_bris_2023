import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import "./Form.css";
import "./Dialog.css";

function EventCreationForm({ onClose, onEventCreate, onEventEdit, eventDataToEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [eventData, setEventData] = useState({
        title: "",
        creator: "",
        image: "",
        description: "",
        location: "",
        date: "",
        time: "",
    });

    useEffect(() => {
        if (eventDataToEdit) {
            setIsEditing(true);
            setEventData(eventDataToEdit);
        }
    }, [eventDataToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value,
        });
    };

    const handleCreateEvent = () => {
        if (isEditing) {
            onEventEdit(eventData);
        } else {
            onEventCreate(eventData);
        }
    };

    return (
        <form onSubmit={handleCreateEvent}>
            <div className="event-creation-popup">
                <div className='dialog'>
                    <h2 className='item-1'>{isEditing ? 'Edit the Event' : 'Create New Event'}</h2>
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
                    <div className="button-container">
                        <button onClick={handleCreateEvent} className='create-event-button'>
                            {isEditing ? 'Save Event' : 'Create Event'}
                        </button>
                        <button onClick={onClose} className='cancel-button'>Cancel</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EventCreationForm;
