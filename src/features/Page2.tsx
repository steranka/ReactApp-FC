import React from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";

let renderCount = 0;

function Page2(props: any) {
    renderCount++;
    let msg = `Page2 [render count=${renderCount} props= ${JSON.stringify(props)}`;
    console.log(msg);


    return (
        <div className="Page2">
            This is the Page2 component<br/>
            {msg}<br/>
            What follows is a component that has the same state on both Page1 and Page2.<br/>
            <WidgetUsingReactContext/>
        </div>
    );
}

export default Page2;
