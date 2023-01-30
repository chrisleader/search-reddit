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
        <div className="NotFoundContainer">
            <div className="NotFoundText">
                    <Link to='/'>
                    Not all those who wander are lost. 👾🛸🪐
                    <br />
                    ✨ Return home. ✨</Link>
            </div>
            <div className="ImageContainer">
                <div className="x">
                    <div className="y" >
                    <Link to='/'>
                        <img className="lol" src='/redditfail.png' />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;