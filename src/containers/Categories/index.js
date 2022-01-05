import React from "react";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../queries/categories/categories";
import BadgeList from "../../components/BadgeList";

const Home = () => {

    return (
        <Query query={CATEGORIES_QUERY}>
            {({ data: { categories } }) => {
                return (
                    <div><br/><BadgeList badgeData={categories}/></div>);
            }}
        </Query>
    );
};

export default Home;
