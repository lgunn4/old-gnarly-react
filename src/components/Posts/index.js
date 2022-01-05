import React from "react";
import Card from "../Card";
import Categories from "../../containers/Categories"
import './style.css';

const Posts = ({ posts }) => {

    return (
    <section>
        <Categories/>
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
