import "./EZM_Factions.css";
import NavBar from "./NavBar";
import factionData from "./data/factions.json";
import FactionDisplay from "./factionDisplay";

function EZM_Factions() {
    const navElements = [
        {
            text: "Home",
            destination: "../../",
            selected: false
        },
        {
            text: "Modules",
            destination: "../modules",
            selected: false
        },
        {
            text: "Factions",
            destination: ".",
            selected: true
        },
        {
            text: "About",
            destination: "..",
            selected: false
        },
        {
            text: "Download",
            destination: "https://github.com/expung3d/Enhanced-Zeus-Modules/archive/refs/heads/main.zip",
            selected: false
        },
        {
            text: "Discord",
            destination: "https://discord.gg/W4ew5HP",
            selected: false
        }
    ];

    return (
        <div>
            <div className="navBar">
                <NavBar navElements={navElements}/>
            </div>
            <div className="Factions">
            {factionData.map((faction) => (
                    <FactionDisplay faction={faction}/>
                ))}
            </div>
        </div>
    );
};

export default EZM_Factions;