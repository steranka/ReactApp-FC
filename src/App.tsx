import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './features/Home';
import Nav from './features/Nav';

import Page1 from './features/Page1';
import Page2 from './features/Page2';
import AppContext, {ReactContext} from "./store/AppContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

enum FsmState {
    initial,
    loading,
    appInitialized,
    appShowData,
    appFailed
}

let simulatedStateData = {
    widgetState: {
        myInput1: '(init)'
    }
}

function App() {
    const [fsmState, setFsmState] = useState(FsmState.appShowData);
    const [loadingMessage, setLoadingMessage] = useState("Initializing...");
    const {appState, setState} = React.useContext(ReactContext);

    /* ComponentDidMount code */
    useEffect(() => {
        // Simulate a call to download the application state

        if (fsmState === FsmState.initial) {
            setTimeout(() => {
                setFsmState(FsmState.appInitialized);
                setLoadingMessage('Application initialized');
                setTimeout(() => {
                    setFsmState(FsmState.appShowData);
                    console.log('******* setState to ' + JSON.stringify(simulatedStateData));
                    setState(simulatedStateData);
                }, 1250);
            }, 2000);
        } else {
            console.log('****** Leaving state at ' + fsmState);
            setState(simulatedStateData);
        }
    }, []);

    useEffect(() => {
        console.log('State changed to ' + fsmState + ', appState=' + JSON.stringify(appState));
    }, [fsmState])

    // console.log('AppContext = ', AppContext);
    // console.log('ReactContext = ', ReactContext);

    let rtn = <div></div>;
    if (fsmState === FsmState.initial || fsmState === FsmState.loading
        || fsmState === FsmState.appInitialized) {
        rtn = (<div>{loadingMessage}</div>);
    } else if (fsmState === FsmState.appFailed) {
        rtn = (<div>Sorry dude, your app failed!</div>);
    } else if (fsmState === FsmState.appShowData) {
        console.log('Finally rendering App pages appState' + JSON.stringify(appState));
        rtn = (
            <AppContext>
                <Router>
                    <Nav/>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home/>
                        </Route>
                        <Route path={"/page1"}>
                            <div className="Page1">
                                <Page1/>
                            </div>
                        </Route>
                        <Route path={"/page2"}>
                            <div className="Page2">
                                <Page2/>
                            </div>
                        </Route>

                    </Switch>
                </Router>
            </AppContext>
        );
    } else {
        rtn = (
            <div>wtf. Probably a bug in the program. Added a new state that isn't handled.</div>
        );
    }
    return rtn;
}

export default App;
