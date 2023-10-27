import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import "./Form.css";
import "./Dialog.css";

const defaultDate = new Date();
defaultDate.setHours(18, 0, 0, 0); // Set to today at 6:00:00 PM

function EventCreationForm({ onClose, onEventCreate, onEventEdit, eventDataToEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        location: "",
        creator: "organiser",
        image: "",
        isOpen: true,
    });

    useEffect(() => {
        if (eventDataToEdit) {
            setIsEditing(true);
            setEventData(eventDataToEdit);
        }
    }, [eventDataToEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEventData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCreateEvent = () => {
        if (isEditing) {
            onEventEdit(eventData);
        } else {
            onEventCreate(eventData); // pass the entire eventData object
        }
        onClose();
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
                        type="text"
                        name="location"
                        placeholder="Event Location"
                        value={eventData.location}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={eventData.image}
                        onChange={handleChange}
                    />
                    {/* Checkbox for is_open */}
                    <label>
                        <input
                            type="checkbox"
                            name="isOpen"
                            checked={eventData.isOpen}
                            onChange={handleChange}
                        />
                        Is Open
                    </label>
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