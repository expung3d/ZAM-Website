import './navBar.css';
import logo from "./images/ZAM 3.0.png";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar( {title = "Z.A.M.", navElements} ) {
    const [isHamburger, setHamburger] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY,setLastScrollY] = useState(0);

    const toggleHamburger = event => {
        setHamburger(!isHamburger);
    };

    useEffect(() => {
        const controlNavbar = () => {
            if(typeof window !== "undefined") {
                if(window.scrollY > lastScrollY || lastScrollY === 0) {
                    setShow(false);
                } else {
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (<>
        <div className={`header  ${(!show && !isHamburger) && 'hidden'}`}>
            <div className="navBarContainer">
                <div className="navBarBrand">
                    <img src={logo} alt="Logo" className="navBarLogo"/>
                    <h1 className="navBarName">{title}</h1>
                </div>
                
                <div className={`navLinks ${isHamburger ? 'activeHam' : ''}`}>
                    <ul>
                        {navElements.map((navElement) => {
                            if (navElement.destination.includes("https")) {
                                return (<li><a href={navElement.destination} target="_blank" rel="noreferrer" className={`navBarButton ${navElement.selected ? 'selectedNav' : ''}`} onClick={toggleHamburger}>{navElement.text}</a></li>)
                            } else {
                                return (<li><Link to={navElement.destination} className={`navBarButton ${navElement.selected ? 'selectedNav' : ''}`} onClick={toggleHamburger}>{navElement.text}</Link></li>)
                            }
                        })}
                    </ul>
                </div>
                <div className="navHamburger">
                    <button className="hamburgerButton" onClick={toggleHamburger}>
                        <span className="hamBar"></span>
                        <span className="hamBar"></span>
                        <span className="hamBar"></span>
                    </button>
                </div>
            </div>
        </div>
    </>)
};

export default NavBar;