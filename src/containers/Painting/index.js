import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";

import PAINTING_QUERY from "../../queries/painting/painting";
import Painting from "../../components/Painting";

const Home = () => {
  let { id } = useParams();

  return (
    <Query query={PAINTING_QUERY} id={id}>
      {({ data: { painting } }) => {
        return (<Painting painting={painting}/>);
      }}
    </Query>
  );
};

export default Home;
