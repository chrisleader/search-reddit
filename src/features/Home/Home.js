import React from "react";
import { ReactComponent as Logo } from './logo.svg'
import './Home.css';

const Home = () => {
    return (
        <div>
            <Logo className="logo"/>
            <form>
                <input
                placeholder="search">

                </input>
                <button>

                </button>
            </form>
        </div>
    )
}

export default Home;