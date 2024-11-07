import { useState } from 'react';

export const SubmitStudentPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');

  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data
  const handleSubmit = async(e) => {
    e.preventdefault();
    const response = await fetch(`${import.meta.env.VITE_API_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        firstName: firstName,
        lastName: lastName,
        major: major,
        school: school,
        grade: grade
      })
    })
    console.log(response);

  }

  return (
    <form >
      <input onChange={(event)=>setFirstName(event.target.value)} type="text" placeholder="First Name" />
      <input onChange={(event)=>setLastName(event.target.value)}type="text" placeholder="Last Name" />
      <input onChange={(event)=>setMajor(event.target.value)}type="text" placeholder="Major" />
      <input onChange={(event)=>setSchool(event.target.value)}type="text" placeholder="School" />
      <input onChange={(event)=>setGrade(event.target.value)}type="text" placeholder="Grade" />
      <button onClick={handleSubmit} type="button">Submit</button>
    </form>
  );
};
