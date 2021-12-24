import React from "react";

import {Button, Image} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReactMarkdown from "react-markdown";
import {faHome} from "@fortawesome/free-solid-svg-icons";


export default function Layout({ children, configuration }) {
        return (
            <div className="pageContainer">
                    <Link to="/">
                    <Button className="sticky-home-button" variant="dark">
                        <FontAwesomeIcon icon={faHome}/>
                    </Button>
                    </Link>

                <div className="layout">
                    <Link to="/">
                    <Image className="headerImage" src={configuration.Profile.data.attributes.name} roundedCircle/>
                    </Link>
                    <h2>{configuration.Name}</h2>
                    <ReactMarkdown>{configuration.Bio}</ReactMarkdown>
                </div>
                <hr />
                <div className="body">
                    {children}
                </div>
            </div>
        )
}
