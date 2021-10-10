import React, {useState} from "react";
import {render} from "react-dom";
import StoreFront from "./StoreFront.js";

function App() {
    const [LoggedIn, setLoggedIn] = useState(false);
    if (LoggedIn) {
        return(
            <>
                <StoreFront />
                <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
            </>
        );
    }

    return(
        <div>
            <h2>Please login</h2>
            <button className="btn btn-primary" onClick={() => setLoggedIn(true)}>Login</button>
        </div>);
}

render(<App />, document.querySelector("#react-root"));
