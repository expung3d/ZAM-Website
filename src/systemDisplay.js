import './systemDisplay.css';
import { Link } from 'react-router-dom';

function SystemDisplay({title, imagePath, description, link}) {
    
    var backgroundStyle = {
        backgroundImage: `url('${imagePath}.png')`,
    }

    return (
        <div className="systemDiv">
            <div style={backgroundStyle} className="systemImage"></div>
            <div className="systemInfoDiv">
                <h3 className="systemInfoLabel">{title}</h3>
                <p className="systemInfoDescription">{description}</p>
            </div>
            <Link className="systemInfoCTA" to={link}>Learn More</Link>
        </div>
    );
};

export default SystemDisplay;