import "./EZM_Modules.css";
import NavBar from "./NavBar";
import AccordionTable from "./AccordionTable";
import moduleData from "./data/modules.json";

function EZM_Modules() {
    const navElements = [
        {
            text: "Home",
            destination: "../../",
            selected: false
        },
        {
            text: "Modules",
            destination: ".",
            selected: true
        },
        {
            text: "Factions",
            destination: "../factions",
            selected: false
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
    
    return (<>
        <div>
            <div className="navBar">
                <NavBar navElements={navElements}/>
            </div>
            <div className="tableContainer">
                <h3>Enhanced Zeus Modules Module Info</h3>
                {
                    moduleData.map((module) => {
                        return (
                            <div key={module.catId}>
                                <AccordionTable module={module} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>);
};

export default EZM_Modules;