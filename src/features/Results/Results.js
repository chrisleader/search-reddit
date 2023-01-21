import React from "react";

const Results = ({results}) => {
    const thumbnailExceptions = ['self', 'default', 'nsfw', 'spoiler'];

    if (!results.length) {
        return (
            <div>
            </div>
        )
    }
    
    else {
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
}

export default Results;