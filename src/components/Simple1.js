import React, {useContext, useEffect, useState} from 'react';
import {ReactContext} from "../store/AppContext";

function Simple1() {
    const {appState, setState} = useContext(ReactContext)

    function changeState(){
      console.log('Simple1.changeState: appState=' + JSON.stringify(appState));
      setState({...appState, widgetState1: { myInput1 : appState.widgetState1.myInput1 + "a" }});
    }

    return (
        <div>
            Simple1 appState={JSON.stringify(appState)}<br/>
            <button onClick={changeState}>Change State</button>
        </div>
    );
}

export default Simple1;