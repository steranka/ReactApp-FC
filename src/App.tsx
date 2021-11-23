import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import Home from './features/Home';
import Nav from './features/Nav';

import Page1 from './features/Page1';
import Page2 from './features/Page2';
import Simple1 from './components/Simple1';
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
    widgetState1: {
        myInput1: '(init)'
    }
}

function App() {
    const {appState, setState} = useContext(ReactContext);
    useEffect(()=>{
        console.log('App.useEffect is initializing state to ' + JSON.stringify(simulatedStateData));
        setState(simulatedStateData);
    },[]);

    console.log('App.render with appState=' + JSON.stringify(appState));
    let rtn = (
        <Simple1/>
    );

    return rtn;
}

export default App;
