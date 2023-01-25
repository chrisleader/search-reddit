import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getComments } from "../../helpers/reddit";
import { setComments } from "../../store/redditSlice";
import formatNum from "../../helpers/formatNum";
import formatTime from "../../helpers/formatTime";
import './Post.css';

const Post = () => {
    const { results } = useSelector(state => state.reddit);
    const { index } = useParams();
    const post = results[index].data;
    const url = post.url;
    const dispatch = useDispatch();

    useEffect(() => {
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
                    <p>Posted by {post.author} {formatTime(post.created_utc)} ago</p>
                </div>
                <div className="PostRowMiddle">
                    <h3>{post.title}</h3>
                    {post.url_overridden_by_dest && <img src={post.url_overridden_by_dest} alt={post.title} />}
                </div>
                <div className="PostRowBottom">
                    <p>{formatNum(post.ups)} upvotes</p>
                    <p>{formatNum(post.num_comments)} comments</p>
                </div>
            </div>
        </div>
    )
};

export default Post;