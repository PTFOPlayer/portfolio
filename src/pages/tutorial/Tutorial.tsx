import React from "react";
import { useLocation } from "react-router-dom";

export default function Tutorial() {
    let location = useLocation();
    let id = location.pathname.split('/')[2];

    return (
        <>
        </>
    )
}