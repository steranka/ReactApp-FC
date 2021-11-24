import React from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";
import Simple1 from "../components/Simple1";

function Page2() {
    return (
        <div className="Page2">
            This is the Page2 component. It knows nothing about appState.<br/>
            What follows is a component that has the same state on both Page1 and Page2.<br/>
            <WidgetUsingReactContext/>
            <Simple1/>
        </div>
    );
}

export default Page2;
