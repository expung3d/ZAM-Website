import './systemDisplay.css';
import { Link } from 'react-router-dom';

function SystemDisplay({title, imagePath, description, links}) {
    
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
            {
                links.map((link, index) => (
                    link.link.includes("https") ? (
                        link.text.includes("Install") ? (
                            <a className="systemInfoCTA systemInfoBold" key={index} href={link.link} target="_blank" rel="noreferrer">{link.text}</a>
                        ) : (
                            <a className="systemInfoCTA" key={index} href={link.link} target="_blank" rel="noreferrer">{link.text}</a>
                        )
                    ) : (
                        <Link className="systemInfoCTA" key={index} to={link.link}>{link.text}</Link>
                    )
                ))
            }
        </div>
    );
};

export default SystemDisplay;