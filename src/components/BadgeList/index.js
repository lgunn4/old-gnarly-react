import React from "react";
import {Badge} from "react-bootstrap";
import './styles.css';
import {Link} from "react-router-dom";

const BadgeList = ({ badgeData, enabledId }) => {
    let badges = [];

    badgeData.forEach(bd => {
        let enabled = bd.id === enabledId;

        enabled ?
                badges.push(
                <Badge pill
                       style={{opacity: "0.60"}}
                       key={bd.id}
                       variant={bd.attributes.Variant}>{bd.attributes.Name}

                </Badge>) :
        badges.push(
            <Link key={bd.id} to={`/category/${bd.id}`}>
                <Badge pill
                       key={bd.id}
                       className="hover-shadow"
                       variant={bd.attributes.Variant}>{bd.attributes.Name}
                </Badge>
            </Link>);
    });


    return badges;
};

export default BadgeList;
