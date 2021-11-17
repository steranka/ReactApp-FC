import React, {useState} from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";
import {ReactContext} from "../store/AppContext";
import MyButton from "../basic-components/MyButton";

let renderCount = 1;

function Page1() {
    let [myInput1, setMyInput1] = useState("(init)");
    const {appState} = React.useContext(ReactContext);

    console.log('Page1.render myInput=' + myInput1 + ', renderCount=' + ++renderCount + ', appState=' + JSON.stringify(appState));


    function textChanged(ev) {
        console.log('Text changed to ' + ev.target.value);
        setMyInput1(ev.target.value);
    }

    function myButtonClicked() {
        console.log("Button was pressed.  Submitting " + myInput1 + ', appState=' + JSON.stringify(appState));
    }

    return (
        <ReactContext.Consumer>
            {({appState}) => {
                return (
                    <div className="Page1">
                        This is the Page1 component<br/>
                        appState = {JSON.stringify(appState)}<br/>
                        <input type="text" value={myInput1} onChange={textChanged}/>
                        <MyButton onClick={myButtonClicked}>Button to click</MyButton><br/>
                        {myInput1 !== "(init)" && <div>You've entered: <b>{myInput1}</b> into the text field above</div>}
                        <WidgetUsingReactContext/>
                    </div>
                )

            }}
        </ReactContext.Consumer>
    );
}

export default Page1;
