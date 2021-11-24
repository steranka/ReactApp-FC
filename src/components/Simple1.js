import React, {useContext} from 'react';
import {ReactContext} from "../store/AppContext";

function Simple1() {
  const {appState, setState} = useContext(ReactContext);

  function changeState() {
    console.log('Simple1.changeState: appState=' + JSON.stringify(appState));
    setState({...appState, widgetState1: {...appState.widgetState1, myInput1: appState.widgetState1.myInput1 + appState.widgetState1.myText1}});
  }

  function onTextChange({target}) {
    console.log('Simple1.onTextChange: text=' + target.value + ', appState=' + JSON.stringify(appState));
    setState({...appState, widgetState1: {...appState.widgetState1, myText1: target.value}});
  }


  return (
    <div style={{border: "2px solid darkgreen"}}>
      Simple1 appState={JSON.stringify(appState)}<br/>
      <input type="text" value={(appState.widgetState1 && appState.widgetState1.myText1) || ""} onChange={onTextChange}/><br/>
      <button onClick={changeState}>Append to appState.widgetState1.myInput1</button>
    </div>
  );
}

export default Simple1;