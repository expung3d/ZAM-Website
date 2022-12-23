import "./AccordionTable.css";
import chevron from "./images/down-chevron.svg";
import { useState } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

function AccordionTable({ module }) {

    const [isOpen,setOpen] = useState(false);

    const openAccordion = () => {
        setOpen(!isOpen);
    };

    const convertToHtml = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString, { USE_PROFILES: { html: true }});
        const html = parse(cleanHtmlString);
        return html;
    }

    return (<>
        <div className="accordionTableContainer">
            <div className="accordionLink">
                <button class="accordionLinkText" onClick={openAccordion}>
                    <h3>{module.catName}</h3>
                    <img src={chevron} alt="" className={`accordionChevron ${isOpen ? 'activeTable' : ''}`}></img>
                </button>
            </div>
            <div className={`accordionAnswer ${isOpen ? 'activeTable' : ''}`}>
                <table className="accordionTable" >
                    <thead>
                        {module.catHeaders.map((header) => {
                            return (<th>{header}:</th>)
                        })}
                    </thead>
                    <tbody>
                        {module.catModules.map((row) => {
                            return (
                                <tr>
                                    {row.map((text) => {
                                        return (
                                            <td>{convertToHtml(text)}</td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};

export default AccordionTable;