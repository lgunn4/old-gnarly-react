import React from "react";
import {Container} from "react-bootstrap";
import AllPosts from "../../containers/AllPosts";
import Categories from "../../containers/Categories";


const FrontPage = () => {

    return (
        <Container >
            <Categories/>
            <AllPosts/>
        </Container>

    );
};

export default FrontPage;
