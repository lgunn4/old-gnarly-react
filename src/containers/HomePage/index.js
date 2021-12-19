import React from "react";
import Posts from "../../components/Paintings";
import Query from "../../components/Query";
import POSTS_QUERY from "../../queries/post/posts";
import {Container} from "react-bootstrap";

const HomePage = () => {
    // const sortByDate = (a,b) => {
    //     const a_date = parseISO(a.published).getTime();
    //     const b_date = parseISO(b.published).getTime();
    //
    //     return a_date < b_date ? 1 : -1;
    // };

  return (
      <Container>
          <Query query={POSTS_QUERY}>
            {({ data: { posts : { data: posts } } }) => {
                // const pinnedPaintings = paintings.filter(painting => painting.pinned).sort((a,b) => sortByDate(a,b));
                // const posts = paintings.filter(painting => !painting.pinned).sort((a,b) => sortByDate(a,b));

                return <Posts posts={posts} />;
            }}
          </Query>
      </Container>

  );
};

export default HomePage;
