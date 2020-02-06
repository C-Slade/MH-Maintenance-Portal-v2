import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MainManuals from './manuals-manuals';
import OasCards from './manuals-oascards';

const Manuals = ({data}) => {
    return (
        <div className="Manuals documentsHolder">
            <div className="title-wrapper">
                <NavLink exact to="/manuals" className="title" activeStyle={{opacity: "100%"}}>Manuals</NavLink>
                <NavLink to="/manuals/oas-cards" className="title" activeStyle={{opacity: "100%"}}>Oas Cards</NavLink>
            </div>
            <div className="additionalLinks">
                <div className="links">
                    <a target="_Blank" rel="noopener noreferrer" href={data.links[0].link}>{data.links[0].name}</a>
                </div>
            </div>
            <Route exact path="/manuals" component={props => <MainManuals data={data}/>}/>
            <Route path="/manuals/oas-cards" component={props => <OasCards data={data}/>}/>
        </div>
    )
}

export default Manuals;