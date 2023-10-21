import "./Form.css";

function StickyNoteForm() {    
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
                    />      
                </div>
                <div>
                    <input 
                        type="checkbox" /> 
                        Anonymous    
                </div>
                <div className="button-style">
                <button type="submit"><span>Create</span></button>
                </div>
                
        </form>
    );
}

export default StickyNoteForm;