import React from "react";
import {Container} from "react-bootstrap";
import {useParams} from "react-router";
import CategoryPosts from "../../containers/CategoryPosts";
import Category from "../../containers/Category";

const CategoryPage = () => {
    let { id } = useParams();

    return (
        <Container>
            <Category id={id}/>
            <CategoryPosts id={id}/>
        </Container>

    );
};

export default CategoryPage;
