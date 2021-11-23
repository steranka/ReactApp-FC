import React, {useState} from 'react';
import WidgetUsingReactContext from "../components/WidgetUsingReactContext";
import {ReactContext} from "../store/AppContext";
import MyButton from "../basic-components/MyButton";

let renderCount = 1;

function Page1() {
    return (
        <div className="Page1">
            This is the Page1 component<br/>
            <WidgetUsingReactContext/>
        </div>
    );
}

export default Page1;
