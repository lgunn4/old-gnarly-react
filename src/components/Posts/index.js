import React from "react";
import Card from "../Card";
import './style.css';

const Posts = ({ posts }) => {

    return (
    <section>
        <br />
        <ul className="post-list">
            {posts.map((post) => {
                return <Card post={post} key={`article-${post.id}`} />;
            })}
        </ul>
    </section>
  );
};

export default Posts;
