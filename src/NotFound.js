import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {

    return (
        <div className="notFound">
            <h2>Uh oh!</h2>
            <p>This page doesn't exist, you silly goose.</p>
            <Link to="/" className="goHome">Go home</Link>
        </div>
    );
};

export default NotFound;