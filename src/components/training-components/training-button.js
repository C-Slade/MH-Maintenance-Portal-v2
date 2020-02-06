import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';

const trainingButton = ({count, name, href}) => {
    const getHref = `training/${href}`
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{delay: `${count * 150}`, duration: 250}}
        >
            {props => (
                <NavLink to={getHref} style={props}>{name}</NavLink>
            )}
        </Spring>
    )
}

export default trainingButton;