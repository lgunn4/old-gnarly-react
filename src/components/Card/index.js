import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';
import BadgeList from "../BadgeList";


const Card = ({ post }) => {
    return (
        <li className="listItem" key={post.id}>
            <Link to={`/post/${post.id}`}>
                <h4>{post.attributes.Title}</h4>
            </Link>

            <small className="lightText">
                <Date dateString={post.attributes.Date} />
            </small>

            <p>{post.attributes.Description}</p>

            <BadgeList badgeData={post.attributes.categories.data} />

            <br/>

        </li>
  );
};

export default Card;
