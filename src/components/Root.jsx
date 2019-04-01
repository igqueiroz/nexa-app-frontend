import React, { useContext } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { Route } from "react-router-dom";



export default function Root(props) {
    return (
        <React.Fragment>
            <Header />
        
            <Footer/>
        </React.Fragment>
    );
}

