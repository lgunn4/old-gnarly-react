import React from "react";

import {Image} from "react-bootstrap";
import profilePicture from "../../assets/profile.jpg"
import "./style.css"
import {Link} from "react-router-dom";

const name = 'Art - Old Gnarly';
export const siteTitle = 'Art - Old Gnarly';
export const siteDescription = 'My name is old Gnarly this is my site of arf, enjoy';

export default function Layout({ children, home }) {
        return (
            <div className="pageContainer">
                <div className="layout">
                    <Link to="/">
                    <Image className="headerImage" src={profilePicture} roundedCircle/>
                    </Link>
                    <h2>{name}</h2>
                </div>
                <br />
                <div className="body">
                    {children}
                </div>
                <div>

                </div>
            </div>
        )
}
