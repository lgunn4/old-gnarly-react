import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';
import BadgeList from "../BadgeList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col, Row} from "react-bootstrap";
import {faThumbtack} from "@fortawesome/free-solid-svg-icons";


const Card = ({ post }) => {
    return (
        <li className="list-item">

            {post.attributes.Pinned ? (<FontAwesomeIcon icon={faThumbtack}  />) : null}

            <Row>
                <Col md={8}>
                <Link to={`/post/${post.id}`}>
                    <h4>{post.attributes.Title}</h4>
                </Link>
                </Col>

                <Col className="date-text" md={4}>
                    <small className="light-text">
                        <Date dateString={post.attributes.Date} />
                    </small>
                </Col>
            </Row>

            <BadgeList badgeData={post.attributes.categories.data} />

            <div className="card-description">
                <p>{post.attributes.Description}</p>
            </div>
            <hr />
        </li>
  );
};

export default Card;
