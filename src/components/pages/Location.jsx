import React from "react";
import '../../App.css';
import { Button } from "../Button";
import Footer from "../Footer";
import LocationAccordion from "../LocationAccordion";

export default function Location() {
    return (
        <>
        <div>
            <h1 className='location'>Location</h1>
        </div>
        <LocationAccordion />
        <Footer />

        </>

    )
}
