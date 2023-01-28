import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery, setButtonClicked } from "../../store/redditSlice";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';

// The SearchForm.js component renders the initial "/" route, where a user can enter a query and choose to search all of Reddit or jump to the first result if, à la Google, they're feeling lucky.

const SearchForm = ({ onSubmit }) => {
    const [localQuery, setLocalQuery] = useState('');
    const { query } = useSelector(state => state.reddit);
    const dispatch = useDispatch();

    //This ensures that the query is blank and the document title is always 'Reddit Search' after the component mounts.
    useEffect(() => {
        setLocalQuery('');
        document.title = `Reddit Search`;
    }, []);

    const handleChange = (e) => {
        setLocalQuery(e.target.value);
        dispatch(setQuery(e.target.value));
    }

    //This updates the Redux store to save which button was clicked.
    const handleClick = (e) => {
        dispatch(setButtonClicked(e.target.id));
    }

    return (
        <div className="SearchForm">
            <Logo className="logo"/>
            <form onSubmit={onSubmit} type="search">
                <input
                    id="search"
                    type="text"
                    value={localQuery}
                    onChange={handleChange}
                    aria-label="search"
                />
                <br />
                <button
                    id="RedditSearch"
                    type="submit"
                    onClick={handleClick}>
                    Reddit Search
                </button>
                <span id="button-span"/>
                <button
                    id="ImFeelingLucky"
                    type="submit"
                    onClick={handleClick}>
                    I'm Feeling Lucky
                </button>
            </form>
        </div>
    )
}

export default SearchForm;