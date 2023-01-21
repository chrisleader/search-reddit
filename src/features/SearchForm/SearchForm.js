import React from "react";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';

const SearchForm = ({query, onChange, onSubmit}) => {
    return (
        <div className="SearchForm">
            <Logo className="logo"/>
            <form onSubmit={onSubmit} type="search">
                <input
                    type="text"
                    //placeholder="Search"
                    value={query}
                    onChange={onChange}
                />
                <br />
                <button
                    type="submit">
                    Reddit Search
                </button>
                <span id="button-span"/>
                <button
                    type="submit">
                    I'm Feeling Lucky
                </button>
            </form>
        </div>
    )
}

export default SearchForm;