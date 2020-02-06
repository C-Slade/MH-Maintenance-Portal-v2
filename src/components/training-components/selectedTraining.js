import React from 'react';
import { NavLink } from 'react-router-dom';
import Iframe from 'react-iframe'

const SelectedTraining = ({training, route, toggleDynamicRoute, type}) => {
    const reset = () => {
        // console.log(parsedTraining)
        toggleDynamicRoute(false, '', '')
    }
    const parsedTraining = JSON.parse(training);



    return (
        <>
            <h2 className="selected-training-heading">{parsedTraining.name}</h2>
            <NavLink className="selected-training-goBack" onClick={reset} to={`${route.location.pathname}`}>{`Go Back to ${route.location.pathname.split("/training/").join("").replace(/-/g," ")}`}</NavLink>
            <Iframe url={type === "review" ? parsedTraining.reviewLink : parsedTraining.quizLink} className={type === "quiz" ? "quiz" : null}/>
        </>
    )
}

export default SelectedTraining;
