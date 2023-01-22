import { React, useState } from "react";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';

const SearchForm = ({query, onChange, onSubmit, setButtonClicked}) => {
    const handleClick = (e) => {
        setButtonClicked(e.target.id);
    }

    return (
        <div className="SearchForm">
            <Logo className="logo"/>
            <form onSubmit={onSubmit} type="search">
                <input
                    type="text"
                    value={query}
                    onChange={onChange}
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