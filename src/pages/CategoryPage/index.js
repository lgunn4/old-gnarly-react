import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router";
import CategoryPosts from "../../containers/CategoryPosts";
import Categories from "../../containers/Categories";

const CategoryPage = () => {
    let { id } = useParams();

    return (
        <Container>
            <div className="category-list">
                <Categories enabledId={id}/>
            </div>
            <CategoryPosts id={id}/>
        </Container>

    );
};

export default CategoryPage;
