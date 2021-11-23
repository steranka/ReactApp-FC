import React, {useContext, useEffect, useState} from 'react';
import MyButton from "../basic-components/MyButton";
import MyInput from "../basic-components/MyInput";
import {ReactContext} from "../store/AppContext";

const bgColor = "#c3f1c3";
let stylingObject = {
    div: {
        color: "red",
        border: "1px solid red",
        padding: ".25em",
        background: bgColor
    },
    MyInput1: {
        margin: "3px",
        padding: "5px",
        border: "2px dashed orange",
        background: bgColor,
        width: '25em'
    },
    MyButton: {
        margin: "0px",
        padding: "15px",
        color: "#322052",
        fontWeight: 'bold'
    },
    MyInput2: {
        // background: bgColor
    }
};

let numRenders = 0;

/**
 * An Component that uses styled-components to style the component and pass styling information
 * to sub-components.  Each sub-
 * @constructor
 */
function WidgetUsingReactContext() {
    let [buttonCount, setButtonCount] = useState(0);
    const {appState, setState} = useContext(ReactContext);

    function getMyInput() {
        let rtn = (appState && appState.widgetState1 && appState.widgetState1.myInput1) || "";
        console.log('getMyInput returns ' + rtn + ' when state=' + JSON.stringify(appState));
        return rtn;
    }

    function handleClick(ev) {
        buttonCount++;
        console.log(`Button ${ev.target.outerText} was clicked ${buttonCount} times!  text is: ${getMyInput()}`);
        setButtonCount(buttonCount);
    }

    function onChange(ev) {
        console.log('onChange ev=' +  ev.target.value + ', appState=' + JSON.stringify(appState));
        if (!appState.widgetState1) {
            appState.widgetState1 = {};
        }
        appState.widgetState1.myInput1 = ev.target.value;
        setState(appState);
    }


    console.log('--------------------------------------------------------------------------------');
    console.log('WidgetUsingReactContext #called = ' + ++numRenders + ' appState=' + JSON.stringify(appState));
    return (
        <div style={stylingObject.div}>
            <input type="text" value={getMyInput()} onChange={onChange}/>
            <MyButton style={stylingObject.MyButton} onClick={handleClick}>Press MyButton</MyButton>
            {buttonCount > 0 &&
            <div>The button has been clicked {buttonCount} times.<br/>
              Notice that when you click the button the React.Context value is shown!</div>

            }
        </div>
    );
}

export default WidgetUsingReactContext;