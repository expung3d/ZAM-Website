import "./Footer.css";

function Footer() {

    return (
        <div className="footerContainer">
            <p>This website is not affiliated or authorized by Bohemia Interactive a.s. Bohemia Interactive, ARMA, DAYZ and all associated logos and designs are trademarks or registered trademarks of Bohemia Interactive a.s.</p>
            <p>©{new Date().getFullYear()} Expung3d. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;