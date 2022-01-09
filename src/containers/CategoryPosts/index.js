import React from "react";
import Query from "../../components/Query";
import POSTS_FILTERED_QUERY from "../../queries/post/PostsFilteredByCategory";
import PostList from "../../components/PostList";


const CategoryPosts = ({id}) => {
    return (
            <Query query={POSTS_FILTERED_QUERY} id={id}>
                {({data: {category: {data: category }}}) => {
                    return (<PostList posts={category.attributes.posts.data} />)
                }}
            </Query>
        );
};

export default CategoryPosts;
