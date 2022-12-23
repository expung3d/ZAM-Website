import "./WorkingOnIt.css";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/ZAM 3.0.png";

function WorkingOnIt() {
    const [redirect,setRedirect] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timeId = setTimeout(() => {
            setRedirect(true);
        },7500);
        setRedirect(false);
        return () => {
            clearTimeout(timeId);
        }
    }, []);
    
    return (<>
        {
            redirect ? (
                navigate("/", { replace: true })
            ) : (
                <div className="workingOnIt">
                    <img src={logo} alt="ZAM Logo"></img>
                    <h2>Oops!</h2>
                    <p>This page isn't finished yet! <br />Sorry for any issues this may cause.</p>
                    <Link to="/" className="goHome">Go home</Link>
                </div>
            )
        }
    </>);
};

export default WorkingOnIt;