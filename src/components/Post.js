import React from 'react';

const Post = ({post}) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div className='card-title'>Title {post} </div>
            </div>
        </div>
    );
};

export default Post;