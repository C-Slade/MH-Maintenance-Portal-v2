import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/mari-logo-1.png'

const Nav = () => {
    return (
        <div className="nav">
            <img src={Logo} className="logo" alt=""/>
            <div className="links">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/calm" activeClassName="active">Calm</NavLink>
                <NavLink to="/manuals" activeClassName="active">Manuals</NavLink>
                <NavLink to="/training" activeClassName="active">Training</NavLink>
                <NavLink to="/safety" activeClassName="active">Safety</NavLink>
                <NavLink to="/memos" activeClassName="active">Memos</NavLink>
            </div>
        </div>
    )
}

export default Nav;