import React from 'react';
import uuid from 'uuid';
import { Transition, animated } from 'react-spring/renderprops';

const AdditionalLinksList = ({isActive, links}) => {
    return (
        <>
            {<Transition 
                items={isActive}
                from={{opacity: 0, display: "none"}}
                enter={{opacity: 1, display: "flex"}}
                leave={{opacity: 0, display: "none"}}
            >
            {show => show && (props => (
                <animated.div style={props} className="list">
                    {links.map(link => <a target="_Blank" rel="noopener noreferrer" key={uuid.v4()} href={link.link}>{link.name}</a>)}
                </animated.div>
            ))}
            </Transition>
            }

        </>
    )
}

export default AdditionalLinksList;