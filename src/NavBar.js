import './navBar.css';
import logo from "./images/ZAM 3.0.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar( {navElements} ) {
    const [isHamburger, setHamburger] = useState(false);

    const toggleHamburger = event => {
        setHamburger(!isHamburger);
    };

    return (<>
        <div className="header">
            <div className="navBarContainer">
                <div className="navBarBrand">
                    <img src={logo} alt="Logo" className="navBarLogo"/>
                    <h1 className="navBarName">Z.A.M.</h1>
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