import React from "react";
import { Link } from "react-router-dom";
import {REACT_APP_BACKEND_URL} from "../../constants";
import Date from "../Date";
import './styles.css';

const Card = ({ painting }) => {

  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? painting.photo[0].url
      : REACT_APP_BACKEND_URL + painting.photo[0].url;

  console.log(imageUrl);
  return (

      <li className="listItem" key={painting.id}>
        <Link to={`/painting/${painting.id}`}>
              <img src={imageUrl} alt={`painting-${painting.id}`}/>
        </Link>
        <br />
        <small className="lightText">
          <Date dateString={painting.published} />
        </small>

      </li>
  );
};

export default Card;
