import { useState } from 'react'
import EmptySignupForm from './EmptySignupForm';
import PrepopulatedForm from './PrepopulatedForm';
import ErrorForm from './ErrorForm';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletter, setNewsletter] = useState(true);

  return (
    <>
      <EmptySignupForm />
      <PrepopulatedForm initialName="Shaun" initialEmail="shaun@gmail.com" />
      <ErrorForm error="Something went wrong!" />
    </>
  )
}

export default App
