import "./TextBubble.css";
import YoutubeEmbed from "./YoutubeEmbed";

function TextBubble({ label, text, video = "" }) {

    return (
        <div className="textBubble">
            <div className="textBubbleData">
                <h3>{label}</h3>
                <p>{text}</p> 
                {video !== "" &&
                    <div className="textBubbleVideo">
                        <YoutubeEmbed embedId={video} />
                    </div>
                }
            </div>
        </div>
    );
};

export default TextBubble;