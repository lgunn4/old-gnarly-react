import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";

import PAINTING_QUERY from "../../queries/painting/painting";
import {REACT_APP_BACKEND_URL} from "../../constants";
import Date from "../../components/Date";
import {Link} from "react-router-dom";
import './styles.css';

const Painting = () => {
  let { id } = useParams();

  return (
    <Query query={PAINTING_QUERY} id={id}>
      {({ data: { painting } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? painting.photo.url
            : REACT_APP_BACKEND_URL + painting.photo[0].url;
        return (
         <div>
           <small className="lightText">
             <Date dateString={painting.published} />
           </small>
           {painting.sold ? (
               <div><strong><p className="soldHeading">SOLD</p></strong></div>
           ) : (
               <div><strong><p className="forSaleHeading">For Sale</p></strong></div>
           )}


           <img src={imageUrl}/>
           <br />

           <h2>{painting.title}</h2>
           <ReactMarkdown source={painting.description} />
           <div className="backToHome">
             <Link to="/">
               <a>← Back to home</a>
             </Link>
           </div>
         </div>
        );
      }}
    </Query>
  );
};

export default Painting;