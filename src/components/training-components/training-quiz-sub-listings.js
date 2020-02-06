import React from 'react';
import uuid from 'uuid';
import Quiz from './quiz';
import Review from './review';
import Note from './note';
import Form from './form';
import ExamResults from './examResults';


const SubListings = ({listingType, data, returnInfo, route, toggleRedirect, readyToRedirect}) => {
    const getQuizzes = () => data.map((quiz, index) => <Quiz quizInfo={quiz} key={uuid.v4()} count={index} returnInfo={returnInfo} route={route} toggleRedirect={toggleRedirect} readyToRedirect={readyToRedirect}/>);
    const getReviews = () => data.map((review, index) => <Review reviewInfo={review} key={uuid.v4()} count={index} returnInfo={returnInfo}/>);
    const getNotes = () => data.map((note, index) => <Note noteInfo={note} key={uuid.v4()} count={index} returnInfo={returnInfo}/>);
    const getForms = () => data.map((form, index) => <Form formInfo={form} key={uuid.v4()} count={index} returnInfo={returnInfo}/>);
    const getExamResults = () => <ExamResults resultsInfo={data.examResults} key={uuid.v4()} count={0} returnInfo={returnInfo}/>
    return (
        <>
            <div className={`listings ${listingType === 'notes' ? 'note-listings' : ''}`}>
                <div className="title">{listingType}</div>
                {
                    listingType === 'quizzes' ? getQuizzes() 
                                              : listingType === 'forms' 
                                              ? getForms() 
                                              : listingType === 'notes'
                                              ? getNotes()
                                              : listingType === "reviews"
                                              ? getReviews()
                                              : listingType === "exam results"
                                              ? getExamResults() 
                                              : null
                }
            </div>
        </>
    )
}

export default SubListings;