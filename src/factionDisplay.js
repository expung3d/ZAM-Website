import './factionDisplay.css';
import { Link } from 'react-router-dom';

function FactionDisplay({ faction }) {
    
    var backgroundStyle = {
        backgroundImage: `url('${faction.icon}.png')`,
    }

    return (
        <div className="factionDiv">
            <div style={backgroundStyle} className="factionImage"></div>
            <div className="factionInfoDiv">
                <h3 className="factionInfoLabel">{faction.name}</h3>
                <p className="factionInfoDescription">{faction.descriptionShort}</p>
            </div>
            <Link className="factionInfoCTA" to={faction.link}>Read more...</Link>
        </div>
    );
};

export default FactionDisplay;