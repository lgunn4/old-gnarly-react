import React from "react";
import Paintings from "../../components/Paintings";
import Query from "../../components/Query";
import PAINTINGS_QUERY from "../../queries/painting/paintings";
import {Container} from "react-bootstrap";
import {parseISO} from "date-fns";

const Home = () => {
    const sortByDate = (a,b) => {
        const a_date = parseISO(a.published).getTime();
        const b_date = parseISO(b.published).getTime();

        return a_date < b_date ? 1 : -1;
    };

  return (
      <Container>
          <Query query={PAINTINGS_QUERY}>
            {({ data: { paintings } }) => {
                const pinnedPaintings = paintings.filter(painting => painting.pinned).sort((a,b) => sortByDate(a,b));
                const regularPaintings = paintings.filter(painting => !painting.pinned).sort((a,b) => sortByDate(a,b));

                return <Paintings paintings={pinnedPaintings.concat(regularPaintings)} />;
            }}
          </Query>
      </Container>

  );
};

export default Home;
