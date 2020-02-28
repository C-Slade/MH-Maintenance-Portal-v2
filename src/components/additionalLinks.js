import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useSpring, animated } from 'react-spring';
import Arrow from '../images/triangleArrow.svg';
import AdditionalLinksList from './additionalLinksList';

const AdditionalLinks = ({links}) => {
    const [isArrowDown, toggleArrow] = useState(true);
    const [isArrowActivated, activateArrow ] = useState(false);
 
    const rotateArrow = () => toggleArrow(!isArrowDown);
    const turnArrowOn = () => activateArrow(true)

    const rotate = useSpring({
        from: {
            transform: `rotate(${isArrowDown ? "180" : "0"}deg)`
        },
        transform: `rotate(${isArrowDown ? "0" : "180"}deg)`
    })

    const dropMenu = useSpring({
        from: {
            height: `${isArrowDown ? '10rem' : "2.5rem"}`
        },
            height: `${isArrowDown ? "2.5rem" : '10rem'}`
    })

    const startArrowAnimation = () => {
        turnArrowOn(true)
        rotateArrow();
    }
    return (
        <>
            <animated.div className="additionalLinksTab" style={dropMenu} onClick={startArrowAnimation}>
                <div className="activate-wrapper">
                    <p>Additional Links</p>
                    <animated.div style={isArrowActivated ? rotate : null} className="arrow">
                        <ReactSVG src={Arrow}/>
                    </animated.div >
                </div>
                <AdditionalLinksList isActive={!isArrowDown} links={links}/>
            </animated.div>
        </>
    )
}

export default AdditionalLinks;