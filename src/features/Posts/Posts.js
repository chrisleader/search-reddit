import React from "react";

const Posts = ({results}) => {
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
                    {['self', 'default', 'nsfw', 'spoiler'].indexOf(item.data.thumbnail) === -1 && <img src={item.data.thumbnail} alt={item.data.title} />}
                </div>
            ))}
            </div>
        )
    }
}

export default Posts;