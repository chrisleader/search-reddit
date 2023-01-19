import React from "react";
import { ReactComponent as Logo } from './logo.svg'
import './Home.css';
import { getPosts } from "../../api/reddit";
import { useState } from "react";
import Posts from "../Posts/Posts";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState({});

    const onChange = ({target}) => {
        setSearchQuery(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getPosts(searchQuery).then(response => setResults(response));
      }

    return (
        <div>
            <Logo className="logo"/>
            <form onSubmit={handleSubmit} type="search">
                <input
                    type="text"
                    placeholder="search"
                    value={searchQuery}
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