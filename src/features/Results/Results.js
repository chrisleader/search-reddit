import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPosts } from "../../api/reddit";
import './Results.css';
import { useDispatch } from "react-redux";

const Results = ({results, setResults}) => {
    const dispatch = useDispatch();
    const thumbnailExceptions = ['self', 'default', 'nsfw', 'spoiler', 'image'];
    const { term } = useParams();

    useEffect(() => {
      (async () => {
        if (term) {
          const response = await getPosts(term);
          dispatch(setResults(response));
        }
      })();
    }, [term]);
    
    return (
        <div className="ResultsContainer">
            {results.map((item, index) => (
            <div key={index} className ="Results">
                <h3>
                    <a href={item.data.url} target='_blank' rel='noreferrer noopener'>{item.data.title}</a>
                </h3>
                {thumbnailExceptions.indexOf(item.data.thumbnail) === -1 && <img src={item.data.thumbnail} alt={item.data.title} />}
            </div>
        ))}
        </div>
    )
}

export default Results;