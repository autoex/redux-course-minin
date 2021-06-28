import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    if (!posts.length) return (<>No posts yet</>)
    return posts.map((post, idx)=> <Post post={post} key={idx} />)
};

export default Posts;