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
                    <p>{item.data.title}</p>
                    <img src={item.data.thumbnail} alt={item.data.title} />
                </div>
            ))}
            </div>
        )
    }
}

export default Posts;