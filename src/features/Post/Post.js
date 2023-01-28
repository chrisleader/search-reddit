import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getComments } from "../../helpers/reddit";
import { setComments, setResultsIndex } from "../../store/redditSlice";
import ReactMarkdown from "react-markdown";
import formatNum from "../../helpers/formatNum";
import formatTime from "../../helpers/formatTime";
import './Post.css';

// The Post.js component renders a selected post from the Results.js component, as well as comments for that post.

const Post = () => {
    const { results, comments } = useSelector(state => state.reddit);
    const { index } = useParams();
    const post = results[index].data;
    const url = `https://www.reddit.com/${post.permalink}`
    const location = useLocation();
    const dispatch = useDispatch();

    //This updates the document title to display the selected post's title and stores the post's comments in the Redux store.
    useEffect(() => {
        document.title = post.title;
        (async () => {
          const response = await getComments(url);
          dispatch(setComments(response));
        })();
      }, []);

    return (
        <div className="PostContainer">
            <div className="Post">
                <div className="PostRowTop">
                    <p>r/{post.subreddit}</p>
                    <p className="PostAuthor">{post.author} {formatTime(post.created_utc)} ago</p>
                </div>
                <div className="PostMiddle">
                        {!post.url.includes('reddit.com') && !post.url.includes('i.redd.it') && <a href={post.url} target="_blank" aria-label={`Visit linked post URL: ${post.title}`}><h3>{post.title}</h3></a>}
                        {post.url.includes('reddit.com') || post.url.includes('i.redd.it') && <h3>{post.title}</h3>}
                </div>
                <div className ="PostMiddle">
                    {post.url_overridden_by_dest
                    && !post.url_overridden_by_dest.includes('thttps')
                    && !post.url_overridden_by_dest.includes('v.redd')
                    && post.url_overridden_by_dest.includes('redd.it')
                    && <img src={post.url_overridden_by_dest} alt={post.title} />}
                    <div className="PostText">
                        <ReactMarkdown>{post.selftext}</ReactMarkdown>
                    </div>
                </div>
                <div className="PostRowBottom">
                    <p>{formatNum(post.ups)} upvotes</p>
                    <a href={url} target="_blank" aria-label={`View on Reddit: ${post.title}`}>
                        <p>View on Reddit</p>
                    </a>
                    <p>{formatNum(post.num_comments)} comments</p>
                </div>
            </div>
            {comments?.map((item, index) => (
                <div key={index} className="Comment" > 
                    <div className="CommentRowTop">
                        <p>{item.author}</p>
                        <p>{formatTime(item.created_utc)} ago</p>
                    </div>
                    <div className="CommentRowMiddle">
                        <div className="CommentText">
                            <ReactMarkdown>{item.body}</ReactMarkdown>
                        </div>
                    </div>
                    <div className="CommentRowBottom">
                        <p>{formatNum(item.ups)} upvotes</p>
                        <a href={`https://www.reddit.com${item.permalink}`} target="_blank" aria-label={`View thread on Reddit`}>
                            <p>View thread on Reddit</p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Post;