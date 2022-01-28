import React from "react";
import '../../App.css';
import { Button } from "../Button";
import Footer from "../Footer";
import { InfoDataCeremony } from "../LocationSectionData";
import LocationSection from "../LocationSection";

export default function Location() {
    return (
        <>
        <div>
            <h1 className='location'>Location</h1>
        </div>
        {/* <LocationAccordion /> */}
        <LocationSection {...InfoDataCeremony}/>
        <Footer />

        </>

    )
}
