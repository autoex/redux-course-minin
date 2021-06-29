import React from 'react';
import FormPosts from "./components/FormPosts";
import Posts from "./components/Posts";
import FetchedPosts from "./components/FetchedPosts";

const App = () => {

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col'><FormPosts /></div>
            </div>
            <div className='row'>
                <div className='col'><Posts /></div>
                <div className='col'><FetchedPosts /></div>
            </div>
        </div>
    );
};


export default App;
