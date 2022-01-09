import React from "react";
import Card from "../Card";
import "./style.css";

const PostList = ({ posts }) => {
    const sortByDate = (a,b) => a.attributes.Date > b.attributes.Date ? 1 : -1;

    const pinnedPosts = posts.filter(post => post.attributes.Pinned).sort((a, b) => sortByDate(a, b));
    const regularPosts = posts.filter(post => !post.attributes.Pinned).sort((a, b) => sortByDate(a, b));
    const allPosts = pinnedPosts.concat(regularPosts);

    return (
        <div>
            <br />
            <ul className="post-list">
                {allPosts.map((post) => {
                    return <Card post={post} key={`article-${post.id}`} />;
                })}
            </ul>
        </div>
    );
};

export default PostList;
