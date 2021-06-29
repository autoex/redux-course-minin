import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";
import {getPosts} from "../redux/posts-reducer";

const Posts = ({posts,isFetching, getPosts}) => {

    if (!posts.length) return (<div className='text-center'>
       {isFetching ? 'Loading' : <button className='btn btn-primary' onClick={getPosts}>Load</button>}
    </div>)

    return posts.map((post, idx) => <Post post={post} key={idx}/>)

};

const mapStateToProps =(state)=> ({
    posts: state.posts.fetchedPosts,
    isFetching: state.posts.isFetching

});

export default connect(mapStateToProps, {getPosts})(Posts);