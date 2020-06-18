import React from "react";

import {Image} from "react-bootstrap";
import "./style.css"
import {Link} from "react-router-dom";

export default function Layout({ children, configuration }) {
        return (
            <div className="pageContainer">
                <div className="layout">
                    <Link to="/">
                    <Image className="headerImage" src={configuration.profilePicture.url} roundedCircle/>
                    </Link>
                    <h2>{configuration.websiteName}</h2>
                    <p>{configuration.websiteDescription}</p>
                </div>
                <br />
                <div className="body">
                    {children}
                </div>
            </div>
        )
}
