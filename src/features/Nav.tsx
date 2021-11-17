import React from "react";
import {Link} from "react-router-dom";

function MyItem(props) {
    return (
        <ul style={{display: 'inline', padding: '2em', margin: '2em'}}>
            <li style={{display: 'inline'}}>{props.children}</li>
        </ul>
    )
}


export default function Nav() {
    return (
        <nav>
            <MyItem>
                <Link to={"/"}>Home</Link>
            </MyItem>
            <MyItem>
                <Link to={"/page1"}>Page1</Link>
            </MyItem>
            <MyItem>
                <Link to={"/page2"}>Page2</Link>
            </MyItem>
            <hr/>
        </nav>

    );

}