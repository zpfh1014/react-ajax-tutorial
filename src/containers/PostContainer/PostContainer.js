import React, { Component } from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
//import * as service from '../../services/post';


class PostContainer extends Component {

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({
            posts: data
        }));
        //.then(data => console.log(data));
    }

    // fetchPostInfo = async ( postId ) => {
    //     const post = await service.getPost(postId);
    //     console.log(post);
    //     const comments = await service.getComments(postId);
    //     console.log(comments);
    // }

    render() {
        const { posts } = this.state;
        
        return(
            <PostWrapper>
                <Navigate />
                <Post />
            </PostWrapper>
        )
    }
}

export default PostContainer;