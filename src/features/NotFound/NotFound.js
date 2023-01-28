import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

// The NotFound.js component renders for all paths outside of those defined in App.js.

const NotFound = () => {
    //This updates the document title to reflect that the page was not found.
    useEffect(() => {
        document.title = "Page not found";
    }, []);

    return (
        <div className="NotFound">
            <img src='/redditfail.png' />
            <p>Not all who wander are lost.</p>
            <Link to='/'>Return home.</Link>
        </div>
    )
}

export default NotFound;