import React from 'react'

export const Posts = ({loading, currentPagePosts}) => {
    if(loading){
        return <h1>loading...</h1>
    }
    
    return (
        <ul className="list-group">
            {currentPagePosts.map((post, index) => {
                return <li key={index} className="list-group-item">{post.body}</li>
            })}
        </ul>
    )
}


