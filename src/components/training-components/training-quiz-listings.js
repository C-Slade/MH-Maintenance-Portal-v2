import React from 'react';
import SubListings from './training-quiz-sub-listings';


const QuizListings = ({data, returnInfo, route, toggleDynamicRoute, readyToRedirect}) => {
    return (
        <>
            <h1 className="training-type">{data.type}</h1>
            {data.forms ? <SubListings data={data.forms} listingType="forms" returnInfo={returnInfo} route={route} toggleRedirect={toggleDynamicRoute} readyToRedirect={readyToRedirect}/> : null}
            {data.reviews ? <SubListings data={data.reviews} listingType="reviews" returnInfo={returnInfo} route={route} toggleRedirect={toggleDynamicRoute} readyToRedirect={readyToRedirect}/> : null}
            {data.quizzes ? <SubListings data={data.quizzes} listingType="quizzes" returnInfo={returnInfo} route={route} toggleRedirect={toggleDynamicRoute} readyToRedirect={readyToRedirect}/> : null}
            {data.notes ? <SubListings data={data.notes} listingType="notes"/> : null}
            {data.examResults ? <SubListings data={data.examResults} listingType="exam results" returnInfo={returnInfo} route={route} toggleRedirect={toggleDynamicRoute} readyToRedirect={readyToRedirect}/> : null}
        </>
    )
}

export default QuizListings;