import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getComments } from "../../helpers/reddit";
import { setComments } from "../../store/redditSlice";
import ReactMarkdown from "react-markdown";
import formatNum from "../../helpers/formatNum";
import formatTime from "../../helpers/formatTime";
import './Post.css';

const Post = () => {
    const { results, comments } = useSelector(state => state.reddit);
    const { index } = useParams();
    const post = results[index].data;
    const url = `https://www.reddit.com/${post.permalink}`
    const dispatch = useDispatch();

    //This stores the post's comments in the Redux store.
    useEffect(() => {
        (async () => {
          const response = await getComments(url);
          dispatch(setComments(response));
        })();
      }, []);

    //This updates the document title to display the selected post's title after the component mounts.
    useEffect(() => {
        document.title = post.title;
    }, []);

    return (
        <div className="PostContainer">
            <div className="Post">
                <div className="PostRowTop">
                    <p>r/{post.subreddit}</p>
                    <p className="PostAuthor">Posted by {post.author} {formatTime(post.created_utc)} ago</p>
                </div>
                <div className="PostMiddle">
                        {!post.url.includes('reddit.com') && <a href={post.url} target="_blank"><h3>{post.title}</h3></a>}
                        {post.url.includes('reddit.com') && <h3>{post.title}</h3>}
                </div>
                <div className ="PostMiddle">
                    {post.url_overridden_by_dest
                    && !post.url_overridden_by_dest.includes('thttps')
                    && !post.url_overridden_by_dest.includes('v.redd')
                    && post.url_overridden_by_dest.includes('redd.it')
                    && <img src={post.url_overridden_by_dest} alt={post.title} />}
                </div>
                <div className="PostText">
                    <ReactMarkdown>{post.selftext}</ReactMarkdown>
                </div>
                <div className="PostRowBottom">
                    <p>{formatNum(post.ups)} upvotes</p>
                    <p>{formatNum(post.num_comments)} comments</p>
                    <a href={url} target="_blank">
                        <p>View more on Reddit</p>
                    </a>
                </div>
            </div>
            {comments?.map((item, index) => (
                <div key={index} className="Comment" > 
                    <div className="CommentRowTop">
                        <p>{item.author}</p>
                        <p>{formatTime(item.created_utc)} ago</p>
                    </div>
                    <div className="CommentRowMiddle">
                        {item.body}
                    </div>
                    <div className="CommentRowBottom">
                        <p>{formatNum(item.ups)} upvotes</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Post;