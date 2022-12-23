import "./DevWarning.css";
import { Link } from "react-router-dom";
import logo from "./images/ZAM 3.0.png";

function DevWarning() {

    return (
        <div className="devWarning">
            <img src={logo} alt="ZAM Logo"></img>
            <h2>Hi There!</h2>
            <p>This website is a work in progess! <br />Information you're looking for may not be here.<br />Please be patient as I build the website.</p>
            <Link to="/" className="goHome">Go home</Link>
        </div>
    );
};

export default DevWarning;