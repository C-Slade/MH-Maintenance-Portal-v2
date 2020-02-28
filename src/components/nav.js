import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import Logo from '../images/mari-logo-1.png'

const Nav = ({location}) => {
    return (
        <div className="nav desktop-nav">
            <img src={Logo} className="logo" alt=""/>
            <div className="links">
                <NavLink exact to="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
                <NavLink to="/calm" className={location.pathname.includes("/calm") ? "active" : ""}>Calm</NavLink>
                <NavLink to="/manuals" className={location.pathname.includes("/manuals") ? "active" : ""}>Manuals</NavLink>
                <NavLink to="/training" className={location.pathname.includes("/training") ? "active" : ""}>Training</NavLink>
                <NavLink to="/safety" className={location.pathname === "/safety" ? "active" : ""}>Safety</NavLink>
                <NavLink to="/memos" className={location.pathname === "/memos" ? "active" : ""}>Memos</NavLink>
            </div>
        </div>
    )
}

export default withRouter(Nav);