import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Redirecter({ redirectScreen, redirectTo="/", timer=5000 }) {
    const [redirect,setRedirect] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const timeId = setTimeout(() => {
            setRedirect(true);
            navigate(redirectTo, {replace: true});
        },timer);
        setRedirect(false);
        return () => {
            clearTimeout(timeId);
        }
    }, [timer,navigate,redirectTo]);

    return (
        (useEffect(() => {
            if(redirect) {
                navigate(redirectTo, {replace : true});
            } else {
                navigate(redirectScreen, {replace : true});
            }
        },[navigate,redirect,redirectTo,redirectScreen]))
    );
};

export default Redirecter;