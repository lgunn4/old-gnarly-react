import React from "react";
import Query from "../../components/Query";
import BadgeList from "../../components/BadgeList";
import CATEGORY_QUERY from "../../queries/category/category";

const Category = ({ id }) => {

    return (
        <Query query={CATEGORY_QUERY} id={id}>
            {({ data: { category } }) => {
                const categories = [];
                categories.push(category.data);

                return (<BadgeList badgeData={categories}/>)}
            }
        </Query>
    );
};

export default Category;
