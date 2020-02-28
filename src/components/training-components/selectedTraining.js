import React from 'react';
import { NavLink } from 'react-router-dom';
import Spinner from '../../images/tail-spin.svg';
import { ReactSVG } from 'react-svg';


export default class selectedTraining extends React.Component {
    state = {
        mounted: false
    }
    componentDidMount() {
       setTimeout(() => {
           this.setState({mounted: true})
       }, 400);
    }

    render() {
        const { training, route, toggleDynamicRoute, type } = this.props;

        const getUrl = () => {
            if (type === "review") {
                return parsedTraining.reviewLink
            } else if (type === "quiz") {
                return parsedTraining.quizLink
            } else if (type === "form") {
                return parsedTraining.link
            } else if (type === "examResults") {
                return parsedTraining.link
            }
        }

        const parsedTraining = JSON.parse(training);

        const reset = () => {
            toggleDynamicRoute(false, '', '')
        }

        return (
            <>
                <h2 className="selected-training-heading">{parsedTraining.name}</h2>
                <NavLink className="selected-training-goBack" onClick={reset} to={`${route.location.pathname}`}>{`Go Back to ${route.location.pathname.split("/training/").join("").replace(/-/g," ")}`}</NavLink>
                <iframe src={getUrl()} 
                        className={type === "quiz" || type === "form" ? "small-iframe" : null}
                        style={type === "quiz" || type === "form" ? {"height" : "385rem"} : null}
                        title={`${type}`}/>
                <ReactSVG src={Spinner} className="spinner" style={this.state.mounted ? {"display" : "none"} : null}/>
            </>
        )
    }
}

