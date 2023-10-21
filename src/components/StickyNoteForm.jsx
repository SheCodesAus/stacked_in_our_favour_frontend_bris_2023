import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

import postSticky from "../api/post-sticky";
// import useAuth from "../hooks/use-auth.js";

function StickyNoteForm () {
    const navigate = useNavigate();
    const currentEventId = window.localStorage.getItem('currentEventId');
    // const {auth, setAuth} = useAuth();

    //we are not passing is open and date, because user should not control them unless they have permissons
    const [stickyDetails, setStickyDetails] = useState ({
        "noteText": "",
        "anonymous": false
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setStickyDetails((prevStickyDetails) => ({
            ...prevStickyDetails,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("create button pressed")
            postSticky(
                stickyDetails.noteText,
                stickyDetails.anonymous,
                currentEventId
            ).then((response) => {
    // console.log("RESPONSE FROM POST REQ: ", response)
            navigate(`/events/${currentEventId}`);
            });
    };


// function StickyNoteForm() {    
    return (
        // <h1>Sticky form</h1>
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
                        type="checkbox" /> 
                        Anonymous    
                </div>
                <div className="button-style">
                <button type="submit" onClick={handleSubmit}><span>Create</span></button>
                </div>
                
        </form>
    );
}

export default StickyNoteForm;