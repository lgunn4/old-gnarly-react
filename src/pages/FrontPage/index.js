import React from "react";
import {Container} from "react-bootstrap";
import AllPosts from "../../containers/AllPosts";
import Categories from "../../containers/Categories";
import "./index.css"


const FrontPage = () => {

    return (
        <Container>
            <div className="category-list">
                <Categories/>
            </div>
            <AllPosts/>
        </Container>

    );
};

export default FrontPage;
