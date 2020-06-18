import React from "react";
import { Link } from "react-router-dom";
import Date from "../Date";
import './styles.css';

const Card = ({ painting }) => {

  const imageUrl = painting.photo[0].url;
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
