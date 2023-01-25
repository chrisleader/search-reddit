import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPosts } from "../../helpers/reddit";
import { useSelector, useDispatch } from "react-redux";
import { setResults } from "../../store/redditSlice";
import formatTime from "../../helpers/formatTime";
import formatNum from "../../helpers/formatNum";
import { ReactComponent as Logo } from './logo.svg'
import './Results.css';

const Results = ({onQueryChange, onSortChange, onTimeChange, onSubmit}) => {
    const { query, sort, time, results } = useSelector(state => state.reddit);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const thumbnailExceptions = ['self', 'default', 'nsfw', 'spoiler', 'image'];

    useEffect(() => {
      (async () => {
        const response = await getPosts(query, sort, time);
        dispatch(setResults(response));
        navigate(`?query=${query}&sort=${sort}&time=${time}`);
      })();
    }, [sort, time]);
    
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
                        onChange={onQueryChange}
                        className="ResultsInput"
                    />
                </form>
                <label for="sort" />
                <select name="sort" id="sort" className="sort" onChange={onSortChange}>
                    <option value="relevance" selected>Relevance</option>
                    <option value="hot">Hot</option>
                    <option value="top">Top</option>
                    <option value="new">New</option>
                    <option value="comments">Most Comments</option>
                </select>
                <label for="time" />
                <select name="time" id="time" className="time" onChange={onTimeChange}>
                    <option value="all" selected>All Time</option>
                    <option value="year">Past Year</option>
                    <option value="month">Past Month</option>
                    <option value="week">Past Week</option>
                    <option value="day">Past 24 Hours</option>
                    <option value="hour">Past Hour</option>
                </select>
            </div>
            {results.map((item, index) => (
            <div key={index} className="Results">
            <div className="ResultsRowTop">
                    <p>r/{item.data.subreddit}</p>
                    <p>Posted by {item.data.author} {formatTime(item.data.created_utc)} ago</p>
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