import './Home.css';
import NavBar from "./NavBar";
import SystemDisplay from "./systemDisplay";
import systemData from "./data/systems.json";

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
            text: "Discord",
            destination: "https://discord.gg/W4ew5HP",
            selected: false
        }
    ];

    return (
        <div className="homePage">
            <div className="navBar">
                <NavBar navElements={navElements}/>
            </div>
            <div className="Systems">
                {systemData.map((system) => (
                    <SystemDisplay title={system.title} description={system.description} imagePath={system.imagePath} link={system.link}/>
                ))}
            </div>
        </div>
    );
};

export default Home;