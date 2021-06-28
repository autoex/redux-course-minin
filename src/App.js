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
                <div className='col'><Posts posts={[1,2,3,4]}/></div>
                <div className='col'><FetchedPosts posts={[]}/></div>
            </div>
        </div>
    );
};

export default App;
