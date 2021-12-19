import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';

const Card = ({ post }) => {
    console.log(post)
  const imageUrl = post.attributes.Images.data[0].attributes.name;
  return (

      <li className="listItem" key={post.id}>
        <Link to={`/post/${post.id}`}>
              <img src={imageUrl} alt={`post-${post.attributes.Title}`}/>
        </Link>
        <br />
        <small className="lightText">
          <Date dateString={post.attributes.Date} />
        </small>

      </li>
  );
};

export default Card;
