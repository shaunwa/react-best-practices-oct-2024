import { useLoaderData } from 'react-router-dom';
import Subsection1 from './Subsection1';

export default function Section1() {
    const [_, data] = useLoaderData();

    if (data) {
        return (
            <>
            <h1>Section 1</h1>
            <h3>{data.hairColor}</h3>
            <Subsection1 />
            </>
        );
    } else {
        return <p>Loading...</p>
    }
}