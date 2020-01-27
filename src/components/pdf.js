import React from 'react';
import { ReactSVG } from 'react-svg';
import documentSVG from '../images/document.svg';
import { Spring } from 'react-spring/renderprops';

const PDF = ({documentInfo, count, abbreviatedlink, onCalm}) => {
    const getLink = !onCalm ? documentInfo.link : abbreviatedlink ? documentInfo.abbreviatedlink : documentInfo.fullLink;

    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{delay: `${count * 450 - count * 300}`, duration: 250}}
        >
            {props => (
                <div style={props} className="documentWrapper">
                    <a className="PDF" href={getLink} target="_Blank" rel="noopener noreferrer">
                        <ReactSVG src={documentSVG} className="documentSVG"/>
                        <p>{documentInfo.name}</p>
                    </a>
                </div>
            )}
        </Spring>
    )
}

export default PDF;