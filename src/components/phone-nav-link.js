import React from 'react';
import PhoneLink from './phone-link';
import uuid from 'uuid'

const phoneNavLinks = ({isNavActive, toggleNav}) => {
    const navLinks = ["","calm","manuals","training","safety","memos"]
    return (
        <>
            {navLinks.map((link, index) => 
                <PhoneLink link={link} index={index} isActive={isNavActive} key={uuid.v4()} toggleNav={toggleNav}/>
            )}
        </>
    )
}

export default phoneNavLinks;