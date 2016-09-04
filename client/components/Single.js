import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { postId } = this.props.params;

        const i = this.props.posts.findIndex((post) => {
            return post.code === postId;
        });
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
        	<div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props}/>
            </div>
    	)
    }
}

export default Single;
