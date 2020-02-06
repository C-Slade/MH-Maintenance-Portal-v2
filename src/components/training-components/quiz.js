import React from 'react';
import { ReactSVG } from 'react-svg';
import Pen from '../../images/pen.svg';
import Book from '../../images/book.svg';
import { Spring } from 'react-spring/renderprops';

const Quiz = ({quizInfo, count, route, toggleRedirect, readyToRedirect}) => {
    const returnTrainingQuiz = () => {
        toggleRedirect(true, route, quizInfo, "quiz");
    }
    const returnTrainingReview = () => {
        toggleRedirect(true, route, quizInfo, "review");
    }
    return (
        <>
            <Spring
                from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: `${count * 150}`, duration: 650}}
            >
                {props => (
                    <div className="quizLink traininglink" style={props}>
                        <h4>{quizInfo.name}</h4>
                        <div className="icon-holder">
                            <div className="pen-wrapper">
                                <ReactSVG src={Pen} className="pen" onClick={returnTrainingQuiz}/>
                                <h4>Quiz</h4>
                            </div>
                            <div className="book-wrapper">
                                <ReactSVG src={Book} className="book" onClick={returnTrainingReview}/>
                                <h4>Review</h4>
                            </div>
                        </div>
                    </div>
                )}
            </Spring>
        </>
    )
}

export default Quiz;