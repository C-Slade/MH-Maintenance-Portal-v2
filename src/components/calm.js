import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import CalmReports from './calmReports';
import AdditionalLinksButton from './additionalLinks';
import { withRouter } from 'react-router';

const Calm = ({data, location}) => {
    return (
        <div className="Calm documentsHolder">
            <AdditionalLinksButton links={data.links}/>
            <div className="title-wrapper">
                <NavLink to="/calm/abbreviated" className={location.pathname === "/calm/abbreviated" ? "title active" : "title"}>Abbreviated Calm Reports</NavLink>
                <NavLink to="/calm/full" className={location.pathname === "/calm/full" ? "title active" : "title"}>Full Calm Reports</NavLink>
            </div>
            <div className="additionalLinks">
                <div className="links">
                    <a target="_Blank" rel="noopener noreferrer" href={data.links[0].link}>{data.links[0].name}</a>
                    <a target="_Blank" rel="noopener noreferrer" href={data.links[1].link}>{data.links[1].name}</a>
                </div>
            </div>
            <Redirect to="/calm/abbreviated" />
            <Route path="/calm/abbreviated" component={props => <CalmReports data={data} abbreviated={true}/>} />
            <Route path="/calm/full" component={props => <CalmReports data={data} abbreviated={false}/>} />
        </div>
    )
}
export default withRouter(Calm);