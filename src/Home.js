import './Home.css';
import NavBar from "./NavBar";
import WarningBanner from './WarningBanner';
import SystemDisplay from "./systemDisplay";
import systemData from "./data/systems.json";
import Footer from './Footer';

function Home() {

    const navElements = [
        {
            text: "Home",
            destination: "/",
            selected: true
        },
        {
            text: "About",
            destination: "/about",
            selected: false
        },
        {
            text: "Install EZM",
            destination: "https://github.com/M9-SD/EZM-Updater/releases/download/V0.1/EZM_Updater.exe",
            selected: false
        },
        {
            text: "Discord",
            destination: "https://discord.gg/W4ew5HP",
            selected: false
        }
    ];

    return (
        <div className="homePage">
            <div className="navBar">
                <NavBar navElements={navElements}/>
                <WarningBanner />
            </div>
            <div className="Systems">
                {systemData.map((system) => (
                    <SystemDisplay title={system.title} description={system.description} imagePath={system.imagePath} links={system.links}/>
                ))}
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;