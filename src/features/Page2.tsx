import React from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";
import Simple1 from "../components/Simple1";

let renderCount = 0;

function Page2() {
    renderCount++;
    let msg = `Page2.render count=${renderCount}.  No appState in this component.`;
    console.log(msg);

    return (
        <div className="Page2">
            This is the Page2 component.  It knows nothing about appState.<br/>
            {msg}<br/>
            What follows is a component that has the same state on both Page1 and Page2.<br/>
            <WidgetUsingReactContext/>
            <Simple1/>
        </div>
    );
}

export default Page2;
