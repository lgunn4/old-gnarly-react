import React from "react";
import { Link } from "react-router-dom";
import {Image, Row} from "react-bootstrap";
import {REACT_APP_BACKEND_URL} from "../../constants";
import Date from "../Date";

const Card = ({ painting }) => {

  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? painting.photo[0].url
      : REACT_APP_BACKEND_URL + painting.photo[0].url;

  console.log(imageUrl);
  return (

      <li key={painting.id}>
        <Link to={`/painting/${painting.id}`}>
          <a><img src={imageUrl} /></a>
        </Link>
        <br />
        <small >
          <Date dateString={painting.published} />
        </small>

      </li>
  );
};

export default Card;
