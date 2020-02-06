import React from 'react';
import { ReactSVG } from 'react-svg';
import FormSVG from '../../images/form.svg';
import { Spring } from 'react-spring/renderprops';

const Form = ({formInfo, count, returnInfo}) => {
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
                <div className="quizLink traininglink" style={props} onClick={returnData}>
                    <h4>{formInfo.name}</h4>
                    <div className="icon-holder">
                        <div className="form-wrapper">
                            <ReactSVG src={FormSVG} className="form"/>
                            <h4>Form</h4>
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}

export default Form;