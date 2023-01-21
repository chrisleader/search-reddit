import React from "react";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';

const SearchForm = ({query, onChange, onSubmit}) => {
    return (
        <div>
            <Logo className="logo"/>
            <form onSubmit={onSubmit} type="search">
                <input
                    type="text"
                    placeholder="search"
                    value={query}
                    onChange={onChange}
                />
                <button
                    type="submit">
                </button>
            </form>
        </div>
    )
}

export default SearchForm;