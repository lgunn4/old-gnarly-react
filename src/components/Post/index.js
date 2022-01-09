import React from "react";
import './style.css';
import Date from "../Date";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import BadgeList from "../BadgeList";

const Post = ({ post }) => {
    return (
        <div>
            <br/>
            <Row>
                <Col md={8}>
                    <h4>{post.attributes.Title}</h4>
                </Col>

                <Col md={4}>
                    <small className="light-text">
                        <Date dateString={post.attributes.Date} />
                    </small>
                </Col>
            </Row>

            <BadgeList badgeData={post.attributes.categories.data} />
            <div/>
            <br/>
            <ReactMarkdown source={post.attributes.Text} />

            <div className="backToHome">
                <Link to="/">
                    <p>← Back Home</p>
                </Link>
            </div>
        </div>
    );
};

export default Post;
