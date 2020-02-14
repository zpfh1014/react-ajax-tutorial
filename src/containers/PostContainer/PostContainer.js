import React, { Component } from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';


class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    constructor(props){
        super();

        this.state = {
            postId: 1,
            fetching: false,
            post : {
                title : null,
                body: null
            },
            comments : []
        };
    }

    fetchPostInfo = async ( postId ) => {

        this.setState({
            fetching: true
        });

        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);

        console.log(info);

        const { title, body } = info[0].data;
        const comments = info[1].data;
    
        this.setState({
            postId,
            post : {
                title,
                body
            },
            comments,
            fetching: false
        });        
    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    render() {
        const {postId, fetching, post, comments} = this.state;

        return (
            <PostWrapper>
                <Navigate 
                    postId={postId}
                    disabled={fetching}
                    onClick={this.handleNavigateClick}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;