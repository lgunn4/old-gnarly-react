import React from "react";
import Paintings from "../../components/Paintings";
import Query from "../../components/Query";
import PAINTINGS_QUERY from "../../queries/painting/paintings";
import {Container} from "react-bootstrap";
import {parseISO} from "date-fns";

const Home = () => {
  return (
      <Container>
          <Query query={PAINTINGS_QUERY}>
            {({ data: { paintings } }) => {
                paintings = paintings.sort((a,b) => {
                    const a_date = parseISO(a.published).getTime();
                    const b_date = parseISO(b.published).getTime();

                    return a_date < b_date ? 1 : -1;
                });

                return <Paintings paintings={paintings} />;
            }}
          </Query>
      </Container>

  );
};

export default Home;
