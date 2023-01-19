import "./About.css";
import TextBubble from "./TextBubble";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ImageWithCaption from "./ImageWithCaption";

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
            <div className="aboutContent">
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

                <h2 className="imagesHeader">Z.A.M. Menu Designs</h2>
                <div className="aboutMenuImages">
                    <ImageWithCaption image="./images/zamMenus/oldestZamMenu.png" caption="The original ZAM Admin Menu design (Early 2020)" />
                    <ImageWithCaption image="./images/zamMenus/oldZamMenu.jpg" caption="The second ZAM Admin Menu design (Mid 2020)" />
                    <ImageWithCaption image="./images/zamMenus/newestZamMenu.png" caption="The newest ZAM Admin Menu design (Early 2021)" />
                </div>

                <TextBubble label="About Expung3d" text={<>
                    &emsp;&emsp;Expung3d has been an Arma player for a long time originally starting with Arma Life. 
                    During his time in that community he had many opportunities to be part of server development teams and become vaguely familiar with SQF. 
                    After far too many times being RDMed, VDMed, and the community for A3L dwindling, he moved on to other areas of Arma. Mostly KOTH and Public Zeus.<br /><br />
                    &emsp;&emsp;After some time of playing Public Zeus and finding some friend groups and joining various communities he had his first encounter with a <em>scripter</em>. 
                    Immediately after meeting the scripter he was kidnapped onto a flying piano and sent to the moon as a rocket flew into space and nuked the world. 
                    From this point on Expung3d focused on learning how to create scripts and spent the next 3-4 months learning SQF and making different menus and systems. 
                    After this he created ZAM and began developing that in his free time. <br/><br/>
                    &emsp;&emsp;In real life, Expung3d is a Private Pilot, Advanced Ground Instructor, and Software Developer who is currently enrolled in college <em>and</em> attending flight school. 
                    Both of these are very expensive endeavours and any sort of donations are greatly appreciated. 
                    Expung3d also will write paid scripts for use in Public Zeus for you, pricing can be negotiated. 
                    Additionally, he can teach you SQF for $40 per lesson. <em><b>CashApp: $smfstzach</b></em>
                </>} />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default About;