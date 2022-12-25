import "./EZM.css";
import TextBubble from "./TextBubble";
import NavBar from "./NavBar";
import Footer from "./Footer";

function EZM() {
    const navElements = [
        {
            text: "Home",
            destination: "../",
            selected: false
        },
        {
            text: "Modules",
            destination: "../EnhancedZeusModules/modules",
            selected: false
        },
        {
            text: "Factions",
            destination: "factions",
            selected: false
        },
        {
            text: "About",
            destination: ".",
            selected: true
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
                <NavBar title="E.Z.M." navElements={navElements}/>
            </div>
            <div className="ezmAbout">
                <TextBubble label="Enhanced Zeus Modules" text={<>
                    &emsp;&emsp;Enhanced Zeus Modules was originally created back in 2019 by GamesByChris. 
                    Since then many people have worked on EZM such as M9-SD, Expung3d, and many more.
                    EZM has always been meant to be used in Public Zeus to enhance the vanilla Zeus abilities. 
                    We've felt that Zeus was lacking many features that have been needed for a long time. 
                    From 2019 until 2022 EZM was a private script that only a select few had access to. 
                    In early Feb. 2022 Expung3d re-wrote EZM from the ground up for use with Scripted Compositions in Arma 3 Official Zeus servers, creating EZM Lite. 
                    With over 100 new modules added, new factions being added, and quality of life changes that Zeus sorely needed, EZM is surely the best in class Vanilla Zeus Enhancement script in the market.<br /><br />
                </>}/>
                <TextBubble label="Enhanced Zeus Modules Installation" text={<>
                <span className="textBold">Steps to Install:</span><br />
                    &emsp;1. Download the EZM source code from the GitHub.<br />
                    &emsp;2. Copy the code and paste it into an invisible helipad.<br />
                    &emsp;&emsp;2a. <span className="textItalic">Add "deleteVehicle this;" to the very end to delete the helipad automatically.</span><br />
                    &emsp;3. Save the composition.<br />
                    &emsp;4. Join a server with Zeus composition scripts enabled and place the composition. <br/> <br/>
                </>} video="lLMcshY0y-Q"/>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default EZM;