import React, {useState} from "react";

let ReactContext = React.createContext();

export { ReactContext };

function AppContext(props) {
    let [appState, setAppState] = useState({});

    function setState(args){
        console.log('AppContext.setState with ' + JSON.stringify(args));
        setAppState(args);
    }


    return (
        <ReactContext.Provider value={{appState, setState}}>
            {props.children}
        </ReactContext.Provider>
    );
}
export default AppContext;
