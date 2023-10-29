import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

import postSticky from "../api/post-sticky";

function StickyNoteForm() {
    const navigate = useNavigate();
    const currentEventId = window.localStorage.getItem('currentEventId');
    console.log('Current Event ID:', currentEventId);

    const [stickyDetails, setStickyDetails] = useState({
        "noteText": "",
        "anonymous": false
    });

    const [isAnonymous, setIsAnonymous] = useState(false);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setStickyDetails((prevStickyDetails) => ({
            ...prevStickyDetails,
            [id]: value,
        }));
        console.log('Updated Sticky Details:', stickyDetails);
    };

    const handleAnonymousChange = () => {
        setIsAnonymous(!isAnonymous);
        // Also update stickyDetails.anonymous here
        setStickyDetails((prevStickyDetails) => ({
            ...prevStickyDetails,
            anonymous: !isAnonymous,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const currentUsername = window.localStorage.getItem("username");

        if (!currentUsername && !isAnonymous) {
            console.log("User is not logged in. Redirecting to login page.");
            return;
        }
        console.log('Current Username:', currentUsername);
        console.log('Submitting with:', stickyDetails.noteText, stickyDetails.anonymous, currentEventId, currentUsername);
        postSticky(
            stickyDetails.noteText,
            stickyDetails.anonymous,
            currentEventId,
            currentUsername
        ).then((response) => {
            navigate(`/events/${currentEventId}`);
        });
    };

    return (
        <form>
            <h1>Create Sticky Note</h1>
            <div className="text-field-style">
                <label htmlFor="noteText">Share your win:</label>
                <input
                    type="text"
                    id="noteText"
                    placeholder="Share your win in 50 characters or less"
                    onChange={handleChange}
                />
            </div>
            <div>
                <input
                    type="checkbox"
                    onChange={handleAnonymousChange}
                />
                Anonymous
            </div>
            <div className="button-style">
                <button type="submit" onClick={handleSubmit}><span>Create</span></button>
            </div>
            <div>
                {isAnonymous ? (
                    <div>Commented by Anonymous</div>
                ) : (
                    <div>Commented by {window.localStorage.getItem("username")}</div>
                )}
            </div>
        </form>
    );
}

export default StickyNoteForm;
