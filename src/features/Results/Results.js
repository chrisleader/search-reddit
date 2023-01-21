import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPosts } from "../../api/reddit";

const Results = ({results, setResults}) => {
    const thumbnailExceptions = ['self', 'default', 'nsfw', 'spoiler'];
    const { term } = useParams();

    useEffect(() => {
      (async () => {
        if (term) {
          const response = await getPosts(term);
          setResults(response);
        }
      })();
    }, [term]);
    
    return (
        <div>
            {results.map((item, index) => (
            <div key={index}>
                <p>
                    <a href={item.data.url} target='_blank' rel='noreferrer noopener'>{item.data.title}</a>
                </p>
                {thumbnailExceptions.indexOf(item.data.thumbnail) === -1 && <img src={item.data.thumbnail} alt={item.data.title} />}
            </div>
        ))}
        </div>
    )
}

export default Results;