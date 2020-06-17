import React from "react";

import {Image} from "react-bootstrap";
import profilePicture from "../../assets/profile.jpg"
import "./style.css"

const name = 'Art - Old Gnarly';
export const siteTitle = 'Art - Old Gnarly';
export const siteDescription = 'My name is old Gnarly this is my site of arf, enjoy';

export default function Layout({ children }) {

    return (
        <div className="pageContainer">
            <div className="layout">
                <Image className="headerImage" src={profilePicture} roundedCircle/>
                <h2>{name}</h2>
                <p>{siteDescription}</p>
            </div>
            <div className="body">
                {children}
            </div>
        </div>
    )

}
