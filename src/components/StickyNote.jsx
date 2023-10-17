import { Link } from"react-router-dom";
import "./StickyNote.css";

// Sticky Note component
function StickyNote(props) {
    const { stickyData }= props;
    
    return (
        <div className="sticky-note">
            <h2>{stickyData.noteText}</h2>
            <h2>By {stickyData.authorId}</h2>    
        </div>  
    );}
    
export default StickyNote;