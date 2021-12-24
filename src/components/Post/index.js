import React from "react";
import './style.css';
import Date from "../Date";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

const Post = ({ post }) => {
    return (
        <div>
            <h2>{post.attributes.Title}</h2>
            <small className="lightText">
                <Date dateString={post.attributes.Date} />
            </small>

            <div/>
            <br />
            <ReactMarkdown source={post.attributes.Text} />


            <div className="backToHome">
                <Link to="/">
                    <p>← Back to home</p>
                </Link>
            </div>
        </div>
    );
};

export default Post;
