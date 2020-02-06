import React from 'react';
import { ReactSVG } from 'react-svg';
import Exam from '../../images/exam.svg';
import { Spring } from 'react-spring/renderprops';

const ExamResults = ({resultsInfo, count, returnInfo}) => {
    const returnData = () => {
        returnInfo()
    }
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{delay: `${count * 150}`, duration: 650}}
        >
            {props => (
                <div className="ExamLink traininglink" style={props}>
                    <div className="icon-holder">
                        <div className="exam-wrapper" onClick={returnData}>
                            <ReactSVG src={Exam} className="examResults"/>
                            <h4>View Results</h4>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default ExamResults;