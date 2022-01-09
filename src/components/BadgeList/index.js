import React from "react";
import {Badge} from "react-bootstrap";
import './styles.css';
import {Link} from "react-router-dom";

const BadgeList = ({ badgeData }) => {
    let badges = [];

    badgeData.forEach(bd =>
        badges.push(
                <Link key={bd.id} to={`/category/${bd.id}`}>
                    <Badge pill key={bd.id}
                           variant={bd.attributes.Variant}>{bd.attributes.Name}
                           <div className="overlay"/>
                    </Badge>
                </Link>));

    return (
        <div>
            <br/>
            {badges}
        </div>);
};

export default BadgeList;
