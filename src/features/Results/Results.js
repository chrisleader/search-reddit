import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPosts } from "../../helpers/reddit";
import { useSelector, useDispatch } from "react-redux";
import { setResults, setButtonClicked } from "../../store/redditSlice";
import time from "../../helpers/time";
import formatNum from "../../helpers/formatNum";
import { ReactComponent as Logo } from './logo.svg'
import './Results.css';

const Results = ({ onChange, onSubmit }) => {
    const { query, results } = useSelector(state => state.reddit);
    const dispatch = useDispatch();
    const { term } = useParams();
    const thumbnailExceptions = ['self', 'default', 'nsfw', 'spoiler', 'image'];

    useEffect(() => {
      (async () => {
        if (term) {
          const response = await getPosts(term);
          dispatch(setResults(response));
        }
      })();
    }, [term]);

    const handleClick = (e) => {
        dispatch(setButtonClicked(e.target.id));
    }
    
    return (
        <div className="ResultsContainer">
            <div className="HeaderContainer">
                <Link to="/">
                    <Logo className="ResultsLogo"/>
                </Link>
                <form onSubmit={onSubmit} type="search" className="ResultsForm">
                    <input
                        type="text"
                        placeholder={query}
                        value={query}
                        onChange={onChange}
                        className="ResultsInput"
                    />
                    <button
                        id="RedditSearch"
                        className="ResultsButton"
                        type="submit"
                        onClick={handleClick}>
                        Reddit Search
                    </button>
                </form>
            </div>
            {results.map((item, index) => (
            <div key={index} className="Results">
            <div className="ResultsRowTop">
                    <p>r/{item.data.subreddit}</p>
                    <p>Posted by {item.data.author} {time(item.data.created_utc)} ago</p>
                </div>
                <div className="ResultsRowMiddle">
                    <h3>
                        <a href={item.data.url} target='_blank' rel='noreferrer noopener'>{item.data.title}</a>
                    </h3>
                    {thumbnailExceptions.indexOf(item.data.thumbnail) === -1 && <img src={item.data.thumbnail} alt={item.data.title} />}
                </div>
                <div className="ResultsRowBottom">
                    <p>{formatNum(item.data.ups)} upvotes</p>
                    <p>{formatNum(item.data.num_comments)} comments</p>
                </div>
            </div>
        ))}
        </div>
    )
}

export default Results;