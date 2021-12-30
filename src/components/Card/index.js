import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';
import BadgeList from "../BadgeList";


const Card = ({ post }) => {
    return (
        <li className="list-item">
            <Link to={`/post/${post.id}`}>
                <h4>{post.attributes.Title}</h4>
            </Link>

            <small className="light-text">
                <Date dateString={post.attributes.Date} />
            </small>

            <p>{post.attributes.Description}</p>

            <BadgeList badgeData={post.attributes.categories.data} />

            <br/>
        </li>
  );
};

export default Card;
