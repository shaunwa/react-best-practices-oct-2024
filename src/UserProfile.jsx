import { memo } from 'react';

export default memo(function UserProfile({ name, age, email, bio, showBio }) {
    console.log('UserProfile is rendering!');

    return (
        <div>
            <h1>{name}</h1>
            <p>{age} years old</p>
            <p>Contact at: {email}</p>
            <h3>About me:</h3>
            {showBio && <p>{bio}</p>}
        </div>
    );
});