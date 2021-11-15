import React, {useContext} from 'react';
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
    const {appState, setState}  = useContext(ReactContext);
    console.log('WidgetUsingReactContext #called = ' + ++numRenders + ' appState=' + JSON.stringify(appState));

    function getMyInput(){
        let rtn = (appState && appState.widgetState && appState.widgetState.myInput1) || "";
        console.log('getMyInput returns ' + rtn + ' for state=' + JSON.stringify(appState));
        return rtn;
    }

    function handleClick(ev){
        console.log(`Button ${ev.target.outerText} was clicked!  text is: ${getMyInput()}`);
    }

    function onChange(ev){
        console.log('ev is ', ev);
        if (!appState.widgetState) {
            appState.widgetState = {};
        }
        appState.widgetState.myInput1 = ev.target.value;
        setState(appState);
    }


    return (
        <div style={stylingObject.div}>
            WidgetUsingReactContext: This is WidgetUsingReactContext that has it's own style and passes that style into it's children.<br/>
            <MyInput id="myInput1" style={stylingObject.MyInput1} value={getMyInput()} onChange={onChange}/>
            <input type='text' onChange={onChange} value={getMyInput()}/>
            <a href={'https://medium.com/technofunnel/4-ways-to-add-styles-to-react-component-37c2a2034e3e'}>See this link for details</a>
            <MyButton style={stylingObject.MyButton} onClick={handleClick}>Press MyButton</MyButton>
        </div>
    );
}

export default WidgetUsingReactContext;