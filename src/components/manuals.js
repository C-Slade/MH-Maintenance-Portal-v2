import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import MainManuals from './manuals-manuals';
import OasCards from './manuals-oascards';
import AdditionalLinksButton from './additionalLinks';
import { withRouter } from 'react-router';

const Manuals = ({data, location}) => {
    return (
        <div className="Manuals documentsHolder">
            <AdditionalLinksButton links={data.links}/>
            <div className="title-wrapper">
                <NavLink exact to="/manuals" className={location.pathname === "/manuals" ? "title active" : "title" }>Manuals</NavLink>
                <NavLink to="/manuals/oas-cards" className={location.pathname === "/manuals/oas-cards" ? "title active" : "title" }>Oas Cards</NavLink>
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

export default withRouter(Manuals);