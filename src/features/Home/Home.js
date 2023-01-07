import React from "react";
import { ReactComponent as Logo } from './logo.svg'
import './Home.css';
import { getPosts } from "../../api/reddit";
import { useState, useEffect } from "react";
import Posts from "../Posts/Posts";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState('');

    const onChange = ({target}) => {
        setSearchQuery(target);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResults(getPosts(searchQuery));
      }

    return (
        <div>
            <Logo className="logo"/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="search"
                    onChange={onChange}
                />
                <button
                    type="submit">

                </button>
            </form>
            <Posts results={results}/>
        </div>
    )
}

export default Home;