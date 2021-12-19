import React from "react";

import {Button, Image} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from "react-markdown";


export default function Layout({ children, configuration }) {
        return (
            <div className="pageContainer">
                <Button className="instaLogo" variant="dark" href="https://www.instagram.com/old.gnarly/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </Button>
                <div className="layout">
                    <Link to="/">
                    <Image className="headerImage" src={configuration.Profile.data.attributes.name} roundedCircle/>
                    </Link>
                    <h2>{configuration.Name}</h2>
                    <ReactMarkdown>{configuration.Bio}</ReactMarkdown>
                </div>
                <br />
                <div className="body">
                    {children}
                </div>
            </div>
        )
}
