import { Link } from "react-router-dom";
import "./StickyNote.css";

// Sticky Note component
function StickyNote(props) {
    const { stickyData } = props;
    const colors = ["pink", "yellow", "green", "plum"]; // add more if needed
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const authorText = stickyData.anonymous ? `Commented by ${stickyData.authorID} & Anonymous` : `By ${stickyData.authorID}`;

    return (
        <div className={`sticky-note ${randomColor}`}>
            <h2 className="noteText">{stickyData.noteText}</h2>
            <h2 className="authorText">{authorText}</h2>    
        </div>
    );
}

export default StickyNote;
