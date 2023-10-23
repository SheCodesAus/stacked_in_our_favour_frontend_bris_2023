import { Link } from"react-router-dom";
import "./StickyNote.css";

// Sticky Note component
function StickyNote(props) {
    const { stickyData } = props;
    const colors = ["pink", "yellow", "green", "plum"]; // add more if needed
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={`sticky-note ${randomColor}`}>
            <h2>{stickyData.noteText}</h2>
            <h2>By {stickyData.authorID}</h2>    
        </div>
    );
}
    
export default StickyNote;