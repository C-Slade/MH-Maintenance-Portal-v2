import React from 'react';
import {Route, Switch } from 'react-router-dom';
import documents from './components/documents';
import Nav from './components/nav';
import PhoneNav from './components/phone-nav'
import Home from './components/home';
import Calm from './components/calm';
import Manuals from './components/manuals';
import Training from './components/training-components/training';
import Safety from './components/safety';
import Memos from './components/memos';
import "./styles.scss";

export default class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Nav />
                <PhoneNav />
                <div className="content-container">
                    <Switch>
                        <Route exact path="/" component={props => <Home data={documents[0]}/>}/>
                        <Route path="/calm" component={props => <Calm data={documents[1]}/>}/>
                        <Route path="/manuals" component={props => <Manuals data={documents[2]} />}/>
                        <Route path="/training" component={props => <Training data={documents[3]}/>}/>
                        <Route path="/safety" component={props => <Safety data={documents[4]}/>}/>
                        <Route path="/memos" component={props => <Memos data={documents[5]}/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}