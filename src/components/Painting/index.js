import React from "react";
import './style.css';
import Date from "../Date";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

const Painting = ({ painting }) => {
    const imageUrl = painting.photo[0].url;
    return (
        <div>
            <h2>{painting.title}</h2>
            <small className="lightText">
                <Date dateString={painting.published} />
            </small>

            {painting.sold ? (
                <div><strong><p className="soldHeading">SOLD</p></strong></div>
            ) : (
                <div><strong><p className="forSaleHeading">{`$ ${painting.price}.00`}</p></strong></div>
            )}

            <img src={imageUrl} alt={`painting-${painting.id}`}/>
            <br />
            <ReactMarkdown source={painting.description} />

            {!painting.sold ?
                (<div>
                    <p>For inquires DM me on <a href="https://www.instagram.com/old.gnarly/">Instagram</a></p>
                    <p>Or send me an <a href={`mailto:jerry_jhennessy@hotmail.co.uk?subject=${painting.title} painting inquiry`}>
                            email
                        </a>
                    </p>
                </div>)
                : null
            }

            <div className="backToHome">
                <Link to="/">
                    <p>← Back to home</p>
                </Link>
            </div>
        </div>
    );
};

export default Painting;
