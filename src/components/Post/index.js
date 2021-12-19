import React from "react";
import './style.css';
import Date from "../Date";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

const Post = ({ post }) => {
    console.log(post);
    const imageUrl = post.attributes.Images.data[0].attributes.name;
    return (
        <div>
            <h2>{post.attributes.Title}</h2>
            <small className="lightText">
                <Date dateString={post.attributes.Date} />
            </small>

            <img src={imageUrl} alt={`post-${post.id}`}/>
            <br />
            <ReactMarkdown source={post.attributes.Text} />

            {/*{!post.sold ?*/}
            {/*    (<div>*/}
            {/*        <p>For inquires DM me on <a href="https://www.instagram.com/old.gnarly/">Instagram</a></p>*/}
            {/*        <p>Or send me an <a href={`mailto:jerry_jhennessy@hotmail.co.uk?subject=${post.title} post inquiry`}>*/}
            {/*                email*/}
            {/*            </a>*/}
            {/*        </p>*/}
            {/*    </div>)*/}
            {/*    : null*/}
            {/*}*/}

            <div className="backToHome">
                <Link to="/">
                    <p>← Back to home</p>
                </Link>
            </div>
        </div>
    );
};

export default Post;
