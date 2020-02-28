import React from 'react';
import { Transition, animated } from 'react-spring/renderprops';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

const phoneNavLinks = ({link, index, isActive, toggleNav, location}) => {
    const hideNav = () => toggleNav();

    const getLink = () => {
        if (link === "") {
            return (
                <NavLink    exact to={`/${link}`} 
                            className={location.pathname === "/" ? "phone-nav-active" : "" }
                            onClick={hideNav}>{`${link === "" ? "home" : link}`}</NavLink>
            )
        } else {
            return (
                <NavLink    to={`/${link}`} 
                            className={location.pathname.includes(`/${link}`) ? "phone-nav-active" : ""}
                            onClick={hideNav}>{`${link === "" ? "home" : link}`}</NavLink>
            )
        }
    }
    return (
        <>
            {<Transition 
                items={isActive}
                from={{opacity: 0}}
                enter={{opacity: 1}}
                leave={{opacity: 0}}
            >
            {show => show && (props => (
                <animated.div style={props}>
                    {getLink()}
                </animated.div>
            ))}
            </Transition>
            }
        </>
    )
}

export default withRouter(phoneNavLinks);