import axios from 'react';

export function getPost(postId) {
    return axios.get('https://jsonplaceholder.typicode.com/posts' + postId);
}

export function getComments(postId) {
    return axios.get('https://jsonplaceholder.typicode.com/posts/${postId}/comments')
}