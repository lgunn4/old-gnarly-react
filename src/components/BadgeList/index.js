import React from "react";
import {Badge} from "react-bootstrap";
import './styles.css';
import {Link} from "react-router-dom";

const BadgeList = ({ badgeData }) => {
    let badges = [];

    badgeData.data.forEach(bd =>
        badges.push(
            <Link key={bd.id} to={`/category/${bd.id}`}>
                <Badge pill key={bd.id}
                       variant={bd.attributes.Variant}>{bd.attributes.Name}
                </Badge>
            </Link>)
    );

    return badges
};

export default BadgeList;
