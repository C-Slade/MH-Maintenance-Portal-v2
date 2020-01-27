import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import CalmReports from './calmReports';

const Calm = ({data}) => {

    return (
        <div className="Calm documentsHolder">
            <div className="title-wrapper">
                <NavLink to="/calm/abbreviated" className="title" activeStyle={{opacity: "100%"}}>Abbreviated Calm Reports</NavLink>
                <NavLink to="/calm/full" className="title" activeStyle={{opacity: "100%"}}>Full Calm Reports</NavLink>
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
export default Calm;