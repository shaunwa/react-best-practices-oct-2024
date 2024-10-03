import { useLoaderData } from 'react-router-dom';

export default function Subsection1() {
    const [_, __, data] = useLoaderData();

    if (data) {
        return (
            <>
            <h1>Sub-Section 1</h1>
            <h3>{data.age}</h3>
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}