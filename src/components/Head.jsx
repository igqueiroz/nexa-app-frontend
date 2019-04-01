import React from 'react';
import {Helmet} from "react-helmet"

export default function Head(props) {
    return (
        <Helmet>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href={require("../images/favicon.ico")} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Nexa Digital | Ache a Clínica mais próxima de você</title>
        </Helmet>
    );
}