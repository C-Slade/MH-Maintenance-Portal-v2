import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import Logo from '../images/mari-logo-1.png'
import MenuIcon from '../images/menu.svg';
import CrossIcon from '../images/cross.svg';
import PhoneNavLinks from './phone-nav-link'
import { Transition, animated } from 'react-spring/renderprops';

const PhoneNav = () => {
    const [isNavActive, toggleNav] = useState(false);
    const toggleNavMenu = () => toggleNav(!isNavActive)
    return (
        <>
            <div className="nav phone-nav">
                <img src={Logo} className="logo" alt=""/>
                <ReactSVG src={isNavActive ? CrossIcon : MenuIcon} className="phone-menu-icon" onClick={toggleNavMenu}/>
                {<Transition 
                    items={isNavActive}
                    from={{transform: 'scaleX(0)', transformOrigin: 'right', opacity: 0}}
                    enter={{transform: 'scaleX(1)', transformOrigin: 'right', opacity: 1}}
                    leave={{transform: 'scaleX(0)', transformOrigin: 'right', opacity: 0}}
                >
                {show => show && (props => (
                    <animated.div style={props} className="phone-nav-dropdown">
                        <div className="links">
                            <PhoneNavLinks isNavActive={isNavActive} toggleNav={toggleNavMenu}/>
                        </div>
                    </animated.div>
                ))}
                </Transition>
                }
            </div>
        </>
    )
}

export default PhoneNav;