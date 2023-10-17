function StickyNoteForm() {    
    return (
        // <h1>Sticky form</h1>
        <form>
            <div>
                <h1>Create Sticky Note</h1>
                <label htmlFor="noteText">Share your win:</label>
                    <input 
                        type="text" 
                        id="noteText" 
                        placeholder="Share your win in 50 characters or less"
                    />      
                </div>
                <div>
                    <input 
                        type="checkbox" /> 
                        Would you like to remain anonymously?    
                </div>
                <button type="submit">Create</button>
        </form>
    );
}

export default StickyNoteForm;