import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import documents from './components/documents';
import Nav from './components/nav';
import Home from './components/home';
import Calm from './components/calm';
import Manuals from './components/manuals';
import Training from './components/training';
import Safety from './components/safety';
import Memos from './components/memos';
import "./styles.scss";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app-container">
                    <Nav/>
                    <div className="content-container">
                        <Switch >
                            <Route path="/" exact component={props => <Home data={documents[0]}/>}/>
                            <Route path="/calm" component={props => <Calm data={documents[1]} props={props}/>}/>
                            <Route path="/manuals" component={props => <Manuals />}/>
                            <Route path="/training" component={props => <Training />}/>
                            <Route path="/safety" component={props => <Safety />}/>
                            <Route path="/memos" component={props => <Memos />}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}