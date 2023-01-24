import { React } from "react";
import { ReactComponent as Logo } from './logo.svg'
import './SearchForm.css';
import { useSelector, useDispatch } from "react-redux";
import { setButtonClicked } from "../../store/redditSlice";

const SearchForm = ({ onChange, onSubmit }) => {
    const {query } = useSelector(state => state.reddit);
    const dispatch = useDispatch();

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