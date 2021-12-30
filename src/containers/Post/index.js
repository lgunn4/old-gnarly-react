import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";

import POST_QUERY from "../../queries/post/post";
import Post from "../../components/Post";

const Home = () => {
  let { id } = useParams();

  return (
    <Query query={POST_QUERY} id={id}>
      {({ data: { post } }) => {
        return (<Post post={post.data}/>);
      }}
    </Query>
  );
};

export default Home;
