import React from "react";
import {Badge} from "react-bootstrap";
import './styles.css';

const BadgeList = ({ badgeData }) => {
    let badges = [];

    badgeData.forEach(bd =>
        badges.push(<Badge pill key={bd.attributes.Variant} variant={bd.attributes.Variant}>{bd.attributes.Name}</Badge>)
    )

    return badges
};

export default BadgeList;
