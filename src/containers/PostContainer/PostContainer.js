import React, { Component } from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';


class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async ( postId ) => {
        // const post = await service.getPost(postId);
        // console.log(post);
        // const comments = await service.getComments(postId);
        // console.log(comments);

        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);

        console.log(info);
    }

    render() {
        //const { posts } = this.state;
        
        return(
            <PostWrapper>
                <Navigate />
                <Post />
            </PostWrapper>
        )
    }
}

export default PostContainer;




// class PostContainer extends Component {
//     state = {}

//     componentDidMount() {
//         this._getPosts();
//     }

//     _getPosts = async() => {
//         const posts = await this._callApi();
//         this.setState({
//             posts
//         })
//     }

//     _callApi = () => {
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then(json => json.data.posts)
//         .chtch(err => console.log(err))
//     }

//     _renderPosts = () => {
//         const posts = this.state.posts.map(post => {
//             return (
//                 <Navigate postId={post.postId} disabled={post.fetching} />
//                 <Post title={post.title} body={post.body} comments={post.comments} />
//             )
//         })
//         return posts;
//     }

//     render() {
//         return(
//             <PostWrapper >
//                 {this.state.posts ? this._renderPosts() : 'Loding'}
//             </PostWrapper>
//         )
//     }
// }