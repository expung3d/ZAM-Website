import "./About.css";
import TextBubble from "./TextBubble";
import NavBar from "./NavBar";

function About() {
    const navElements = [
        {
            text: "Home",
            destination: "../",
            selected: false
        },
        {
            text: "About",
            destination: ".",
            selected: true
        },
        {
            text: "Discord",
            destination: "https://discord.gg/W4ew5HP",
            selected: false
        }
    ];

    return (
        <div className="aboutContainer">
            <div className="navBar">
                <NavBar navElements={navElements}/>
            </div>
            <TextBubble label="History of Z.A.M." text={<>
                &emsp;&emsp;Zach's Arma Modifications (formerly Zach's Admin Menu) is a community of people who create new systems and features for vanilla Arma 3, without the need for mods. 
                Originally starting as only an admin menu the ZAM menu allowed for players with access to it to manage players in the server, clean the map, create respawns, teleport players, and generally watch over the server. 
                After this, due to feature creep, ZAM introduced many new features into the ZAM menu script such as dragging players, using animations, attaching flags to vehicles, and many other features. 
                Due to the obviously poor implementation of the original ZAM script and the need for a light-weight way to moderate servers without all the (at the time buggy) features the ZAM menu and ZAM scripts were separated, and thus, ZAM Lite was created. <br /><br />
                &emsp;&emsp;ZAM Lite had many of the features that the original ZAM script had but had a completely different system for implementation. 
                This combined with Expung3d's improved scripting ability the new ZAM Lite ran much more efficiently and had far less bugs than the original. 
                Unfortunately, issues remained, the script was far too cluttered to edit and Expung3d had by all practical means, abandoned ZAM Lite. 
                During this period other systems were focused on, Enhanced Zeus Modules, the Logistics System, and the Roles System are just a few. 
                Eventually, Expung3d realized that ZAM Lite had far too many issues and needed to be rewritten, and so it was. 
                ZAM Lite was then replaced with the ''ZAM Server Enhancement Pack'' (very fancy, I know) or E.P. for short. <br /><br />
            </>} />

            <TextBubble label="About Expung3d" text={<>
                &emsp;&emsp;PLEASE DONATE TO ME!!!!
            </>} />
        </div>
    );
};

export default About;