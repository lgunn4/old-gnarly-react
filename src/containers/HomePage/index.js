import React from "react";
import Posts from "../../components/Posts";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";
import {Container} from "react-bootstrap";

const HomePage = () => {
    const sortByDate = (a,b) => a.attributes.Date > b.attributes.Date ? 1 : -1;

  return (
      <Container>
          <Query query={POSTS_QUERY}>
            {({ data: { posts : { data: posts } } }) => {
                const pinnedPosts = posts.filter(post => post.attributes.Pinned).sort((a,b) => sortByDate(a,b));
                const regularPosts = posts.filter(post => !post.attributes.Pinned).sort((a,b) => sortByDate(a,b));

                return <Posts posts={pinnedPosts.concat(regularPosts)} />;
            }}
          </Query>
      </Container>

  );
};

export default HomePage;
