import React from "react";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../queries/category/categories";
import BadgeList from "../../components/BadgeList";

const Categories = () => {

    return (
        <Query query={CATEGORIES_QUERY}>
            {({ data: { categories } }) => {
                return (<BadgeList badgeData={categories.data}/>);
            }}
        </Query>
    );
};

export default Categories;
