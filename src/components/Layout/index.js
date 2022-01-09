import React from "react";

import {Button, Image} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouzz} from "@fortawesome/free-brands-svg-icons";


export default function Layout({ children, configuration }) {
        return (
            <div className="layout">
                <Link to="/">
                    <Button className="sticky-home-button" variant="dark">
                        <FontAwesomeIcon icon={faHouzz}/>
                    </Button>
                </Link>

                <div className="page-container">

                    <div className="configuration">
                        <Link to="/">
                        <Image className="headerImage" src={configuration.Profile.data.attributes.url} roundedCircle/>
                        </Link>
                        <h2>{configuration.Name}</h2>
                        <div className="bio">
                            <ReactMarkdown>{configuration.Bio}</ReactMarkdown>
                        </div>
                    </div>
                    <hr />
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>
        )
}
