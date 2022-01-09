import React from "react";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";
import PostList from "../../components/PostList";


const AllPosts = () => {
    return (
        <Query query={POSTS_QUERY}>
            {({data: {posts: {data: posts}}}) => {
                return (<PostList posts={posts} />);
            }}
        </Query>
    );
};

export default AllPosts;
