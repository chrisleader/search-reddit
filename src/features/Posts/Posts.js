import React from "react";

const Posts = ({results}) => {
    if (results = {}) {
        return (
            <div>
            </div>
        )
    } else {
        return (
            <div>
                {results}
            </div>
        )
    }
}

export default Posts;