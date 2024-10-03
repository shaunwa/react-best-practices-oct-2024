import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Section1 from './Section1';

export default function Page1() {
    const [data] = useLoaderData();

    if (data) {
        return (
            <>
            <h1>Page 1</h1>
            <h3>{data.name}</h3>
            <Section1 />
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}