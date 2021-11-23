import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './features/Home';
import Nav from './features/Nav';

import Page1 from './features/Page1';
import Page2 from './features/Page2';
import Simple1 from './components/Simple1';
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

function App() {
    const [appState, setState] = useState(simulatedStateData);

    console.log('App.render with appState=' + JSON.stringify(appState));
    let rtn = (
        <ReactContext.Provider value={{appState, setState}}>
            <Simple1/>
        </ReactContext.Provider>
    );

    return rtn;
}

export default App;
