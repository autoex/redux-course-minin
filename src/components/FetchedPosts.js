import React from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/posts-reducer";
import Loader from "../assets/Loader";

export default () => {

    const isFetching = useSelector(state => state.app.isFetching )
    const posts = useSelector(state => state.posts.fetchedPosts )
    const dispatch = useDispatch()

    if (!posts.length) return (<div className='text-center'>
       {isFetching ? <Loader/> : <button className='btn btn-primary' onClick={()=>dispatch(getPosts())}>Load</button>}
    </div>)

    return posts.map((post, idx) => <Post post={post} key={idx}/>)

};



