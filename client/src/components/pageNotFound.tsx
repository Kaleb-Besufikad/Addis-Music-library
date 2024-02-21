import React from "react";
import { Text } from "rebass";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <Text fontSize="5em" textAlign="center" color="white">
            404 Page Not Found
            <Link to="/">Go Home</Link>
        </Text>
    );
};

export default PageNotFound;
