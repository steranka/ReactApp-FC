import React from 'react';

/**
 * MyText is a wrapper around a text component.  Props/arguments are:
 * onChange(event:object) => void
 * default:string = The default value to display
 */
function MyInput(props: any) {
    let changeFunct = props.onChange ? props.onChange : logChange;
    return (
        <input type={"text"} style={props.style} value={props.value} onChange={changeFunct}/>
    );
}


function logChange(ev: any) {
    console.log('Input changed to ' + ev.target.value);
}

export default MyInput;
