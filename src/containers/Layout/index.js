import React from "react";
import Query from "../../components/Query";
import CONFIGURATIONS_QUERY from "../../queries/configuration/configurations";
import Layout from "../../components/Layout";

const Home = ({children}) => {
    return (
            <Query query={CONFIGURATIONS_QUERY}>
                {({ data: { configurations } }) => {
                    return <Layout configuration={configurations[0]} children={children} />;
                }}
            </Query>
    );
};

export default Home;
