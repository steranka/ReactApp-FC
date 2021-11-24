import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './features/Home';
import Nav from './features/Nav';

import Page1 from './features/Page1';
import Page2 from './features/Page2';
import {ReactContext} from "./store/AppContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

enum FsmState {
    initial,
    loading,
    appInitialized,
    appShowData,
    appFailed
}

let simulatedStateData = {
    widgetState1: {
        myInput1: '(init)'
    }
}
let lastFsmState;

function App() {
    const [fsmState, setFsmState] = useState(FsmState.initial);
    const [loadingMessage, setLoadingMessage] = useState("Initializing...");
    const {appState, setState} = React.useContext(ReactContext);

    /* ComponentDidMount code */
    useEffect(() => {
        // Simulate a call to download the application state
        if (fsmState === FsmState.initial) {
            lastFsmState = fsmState;
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
            console.log('App.useEffect[fsmState]  fsmState=' + fsmState);
        }

    }, [fsmState,setState, setFsmState]);


    useEffect(() => {
        console.log('App.useEffect[fsmState]: fsmState changed from ' + lastFsmState + ' to ' + fsmState + ',' +
            ' ,appState=' + JSON.stringify(appState));
        lastFsmState = fsmState;
    }, [fsmState])

    // console.log('AppContext = ', AppContext);
    // console.log('ReactContext = ', ReactContext);

    let rtn = <div><b>ERROR:</b>Probably a bug in the program. Added a new state that isn't handled.</div>;
    if (fsmState === FsmState.initial || fsmState === FsmState.loading || fsmState === FsmState.appInitialized) {
        rtn = (<div>{loadingMessage}</div>);
    } else if (fsmState === FsmState.appFailed) {
        rtn = (<div>Sorry dude, your app failed!</div>);
    } else if (fsmState === FsmState.appShowData) {
        console.log('App.render appState ' + JSON.stringify(appState));
        rtn = (
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
        );
    }

    return rtn;
}

export default App;
