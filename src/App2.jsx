import { useState } from 'react'
import UserProfile from './UserProfile';
import './App.css'

function App2() {
    const [count, setCount] = useState(0);

    return (
        <>
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
        <UserProfile name="Shaun" age="123" email="shaun@gmail.com" bio="I like food" showBio={count >= 10} />
        </>
    );
}

export default App2
