import React from 'react';
import {Helmet} from "react-helmet"

export default function Head(props) {
    return (
        <Helmet>
            <link rel="shortcut icon" href={require("../images/favicon.ico")} />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Nexa Digital | Ache a Clínica mais próxima de você</title>
            <meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Nexa Digital" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Nexa Digital" />
			<meta property="og:description" content="Nexa Digital" />
			<meta property="og:url" content="https://nexa-digital.appspot.com/" /> 
			<meta property="og:site_name" content="Nexa Digital" /> 
			<meta name="twitter:card" content="summary_large_image" /> 
			<meta name="twitter:description" content="Nexa Digital" /> 
			<meta name="twitter:title" content="Nexa Digital" /> 
			<meta name="twitter:site" content="@nexadigital" /> 
			<meta name="twitter:creator" content="@nexadigital" />
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.css" />
        </Helmet>
    );
}