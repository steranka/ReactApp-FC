import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
            </ul>
            <ul>
                <li><Link to={"/page1"}>Page1</Link></li>
            </ul>
            <ul>
                <li><Link to={"/page2"}>Page2</Link></li>
            </ul>
        </nav>

        );

}