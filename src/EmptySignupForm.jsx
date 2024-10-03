import { useState } from 'react'
import InfoForm from './InfoForm'

export default function EmptySignupForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [newsletter, setNewsletter] = useState(true);
  
    return (
      <>
        <InfoForm
          name={name}
          onNameChanged={newName => setName(newName)}
          email={email}
          onEmailChanged={newEmail => setEmail(newEmail)}
          newsletter={newsletter}
          onNewsletterChanged={newValue => setNewsletter(newValue)}
          buttonText="Sign Up"
          onButtonClicked={() => alert('Thank you for subscribing!')} />
        </>
    );
}