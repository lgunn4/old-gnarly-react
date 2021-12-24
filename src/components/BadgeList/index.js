import React from "react";
import {Badge} from "react-bootstrap";

const BadgeList = ({ badgeData }) => {
    console.log(badgeData);
    let badges = [];

    badgeData.forEach(bd =>
        badges.push(<Badge pill variant={bd.attributes.Variant}>{bd.attributes.Name}</Badge>)
    )

    return badges
};

export default BadgeList;
