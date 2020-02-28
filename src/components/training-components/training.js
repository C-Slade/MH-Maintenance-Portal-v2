import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SelectTraining from './training-select';
import QuizListings from './training-quiz-listings';
import SelectedTraining from './selectedTraining';
import uuid from 'uuid';

const Training = ({data}) => {
    const [readyToRedirect, toggleRedirect] = useState(false);
    const [route, setRoute] = useState('');
    const [trainingInfo, setTrainingInfo] = useState('');
    const [trainingInfoType, setTrainingInfoType] = useState('');

    const toggleDynamicRoute = (boolean, route, trainingInfo, type) => {
        setRoute(route);
        setTrainingInfo(trainingInfo)
        setTrainingInfoType(type)
        toggleRedirect(boolean)
    }
    
    const getRoute = () => `${route.location.pathname}/${trainingInfo.name.replace(/ /g,"-")}`;

    return (
        <div className="Training">
            <Route exact path="/training" component={SelectTraining}/>

            {data.trainingCategories.map((trainingType, index) => 
                <Route exact path={`/training/${trainingType.type.replace(/ /g, "-")}`} key={uuid.v4()} component={props => 
                    <QuizListings data={data.trainingCategories[index]} 
                                  route={props} 
                                  toggleDynamicRoute={toggleDynamicRoute} 
                                  readyToRedirect={readyToRedirect}/>} />)}

            {route.location ? <Route exact path={`${route.location.pathname}/:id`} render={props => {
                return <SelectedTraining training={JSON.stringify(trainingInfo)} 
                                         route={route} 
                                         toggleDynamicRoute={toggleDynamicRoute}
                                         type={trainingInfoType}/>
            }} /> : null}

            {readyToRedirect ? <Redirect to={getRoute()}/> : null}
        </div>
    )
}

export default Training;