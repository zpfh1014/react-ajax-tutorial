import React from 'react';
import './Post.css';
import { CommentList } from '../';

const Post = () => {
    return (
        <div className="Post">
            <h1>타이틀</h1>
            <p>txt</p>
            <CommentList />
        </div>
    )

}

export default Post;