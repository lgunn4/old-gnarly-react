import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";

import PAINTING_QUERY from "../../queries/painting/painting";
import Date from "../../components/Date";
import {Link} from "react-router-dom";
import './styles.css';

const Painting = () => {
  let { id } = useParams();

  return (
    <Query query={PAINTING_QUERY} id={id}>
      {({ data: { painting } }) => {
        const imageUrl = painting.photo[0].url;
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

           <img src={imageUrl} alt={`painting-${painting.id}`}/>
           <br />

           <h2>{painting.title}</h2>
           <ReactMarkdown source={painting.description} />
           <div className="backToHome">
             <Link to="/">
               <p>← Back to home</p>
             </Link>
           </div>
         </div>
        );
      }}
    </Query>
  );
};

export default Painting;
