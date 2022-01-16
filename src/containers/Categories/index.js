import React from "react";
import Query from "../../components/Query";
import CATEGORIES_QUERY from "../../queries/category/categories";
import BadgeList from "../../components/BadgeList";

const Categories = ({ enabledId}) => {

    return (
        <Query query={CATEGORIES_QUERY}>
            {({ data: { categories } }) => {
                return (<BadgeList badgeData={categories.data} enabledId={enabledId}/>);
            }}
        </Query>
    );
};

export default Categories;
