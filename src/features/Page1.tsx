import React, {useState} from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";
import {ReactContext} from "../store/AppContext";

let renderCount = 1;

function Page1() {
    let [myInput1, setMyInput1] = useState(renderCount);
    const {appState, setState} = React.useContext(ReactContext);

    console.log('Page1.render myInput=' + myInput1 + ', renderCount=' + ++renderCount + ', appState=' + JSON.stringify(appState));


    function textChanged(ev) {
        console.log('Text changed to ' + ev.target.value);
        setMyInput1(ev.target.value);
    }

    function buttonPressed() {
        console.log("Button was pressed.  Submitting " + myInput1);
    }


    return (
        <div className="Page1">
                This is the Page1 component<br/>
                appState = {JSON.stringify(appState)}<br/>
                <WidgetUsingReactContext/>
        </div>

    );
}

export default Page1;
