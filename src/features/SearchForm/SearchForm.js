import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setButtonClicked } from "../../store/redditSlice";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';

const SearchForm = ({ onQueryChange, onSubmit }) => {
    const { query } = useSelector(state => state.reddit);
    const dispatch = useDispatch();

    //This ensures that the document title is always 'Reddit Search' after the component mounts.
    useEffect(() => {
        document.title = `Reddit Search`;
    }, []);

    //This updates the Redux store to save which button was clicked.
    const handleClick = (e) => {
        dispatch(setButtonClicked(e.target.id));
    }

    return (
        <div className="SearchForm">
            <Logo className="logo"/>
            <form onSubmit={onSubmit} type="search">
                <input
                    type="text"
                    value={query}
                    onChange={onQueryChange}
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