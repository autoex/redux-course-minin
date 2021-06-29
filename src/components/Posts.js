import React from 'react';
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({posts}) => {


    if (!posts.length) return (<>No posts yet</>)

    return posts.map((post, idx)=> <Post post={post} key={idx} />)
};

const mapStateToProps =(state)=> ({
    posts: state.posts.posts

});

export default connect(mapStateToProps)(Posts);