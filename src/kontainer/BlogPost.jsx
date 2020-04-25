import React, {Component, Fragment} from 'react';

// Video #10
import './BlogPost.css';
import Post from '../komponen/Post'
class BlogPost extends Component{
    
    render(){
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <Post title="title" desc="deskripsi"/>
            </Fragment>
        )
    }
}
export default BlogPost;
// end-Video #10