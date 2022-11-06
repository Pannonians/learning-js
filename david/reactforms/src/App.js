import React, { useState } from "react";
import './App.css';

const InputField = ({ type = 'text', setter, person, attr }) => {
  return (
    <input
      placeholder={attr}
      type={type}
      onChange={(e) =>
        setter({
          ...person,
          [attr]: e.target.value,
        })
      }
      value={person[attr]}
    />
  )
}

function App() {
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    text: '',
  })
  const [showResult, setShowResult] = useState(false)
 
  return (
    <>
      <div className="container">
        <h1>Form React Application</h1>
      </div>
      <div className="container-flex">
        <div className="container-content container-background">
          <div
            style={{ height: 300, width: '50vw' }}
          >
            <h1>Person</h1>
            <div className="items">
              <InputField attr={'firstName'} setter={setPerson} person={person} />
              <InputField attr={'lastName'} setter={setPerson} person={person} />
              <InputField
                type="date"
                attr={'dob'}
                setter={setPerson}
                person={person}
              />
              <InputField attr={'text'} setter={setPerson} person={person} />
              <button onClick={(e) => { setShowResult(true) }}>Submit</button>
            </div>
          </div>
        </div>
        <div className="container-content container-background "
          style={{ height: 500, width: '50vw' }}
        >
          <h1>Result</h1>
          {showResult && (
            <code style={{ fontSize: 15 }}>
              <pre>
                <div>{JSON.stringify(person)}</div>
              </pre>
            </code>
          )}
        </div>
      </div>
    </>
  )
}

export default App