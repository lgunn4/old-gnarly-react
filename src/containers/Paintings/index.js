import React from "react";
import Paintings from "../../components/Paintings";
import Query from "../../components/Query";
import PAINTINGS_QUERY from "../../queries/painting/paintings";
import {Container} from "react-bootstrap";

const Home = () => {
  return (
      <Container>
          <Query query={PAINTINGS_QUERY}>
            {({ data: { paintings } }) => {
              return <Paintings paintings={paintings} />;
            }}
          </Query>
      </Container>

  );
};

export default Home;
