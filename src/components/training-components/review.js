import React from 'react';
import { ReactSVG } from 'react-svg';
import Book from '../../images/book.svg';
import { Spring } from 'react-spring/renderprops';

const Review = ({reviewInfo, count, route, toggleRedirect, readyToRedirect}) => {
    const returnTrainingReview = () => {
        toggleRedirect(true, route, reviewInfo, "review");
    }
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{delay: `${count * 150}`, duration: 650}}
        >
            {props => (
                <div className="quizLink traininglink" style={props}>
                    <h4>{reviewInfo.name}</h4>
                    <div className="icon-holder">
                        <div className="book-wrapper">
                            <ReactSVG src={Book} className="book" onClick={returnTrainingReview}/>
                            <h4>Review</h4>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default Review;