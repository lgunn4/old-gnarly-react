import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';
import BadgeList from "../BadgeList";
import {Col, Row} from "react-bootstrap";


const Card = ({ post }) => {
    return (
        <li className="list-item">
            <Row>
                <Col md={8}>
                <Link to={`/post/${post.id}`}>
                    <h4>{post.attributes.Title}</h4>
                </Link>
                </Col>

                <Col md={4}>
                    <small className="light-text">
                        <Date dateString={post.attributes.Date} />
                    </small>
                </Col>
            </Row>

            <BadgeList badgeData={post.attributes.categories.data} />
            <div></div>
            <br/>

            <p>{post.attributes.Description}</p>


            <br/>
        </li>
  );
};

export default Card;
