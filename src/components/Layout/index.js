import React from "react";

import {Image} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";
import ReactMarkdown from "react-markdown";


export default function Layout({ children, configuration }) {
        return (
            <div className="pageContainer">

                <div className="layout">
                    <Link to="/">
                    <Image className="headerImage" src={configuration.Profile.data.attributes.url} roundedCircle/>
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
