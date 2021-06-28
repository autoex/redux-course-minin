import React from 'react';
import Post from "./Post";

export default ({posts}) => {

    if (!posts.length) return (<button className='btn btn-primary'>Load</button>)
    return  posts.map((post, idx)=> <Post post={post} key={idx} />)
};

