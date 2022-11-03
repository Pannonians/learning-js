import { useState } from "react";
import "./App.css";

const InputGreeting = ({ type = "text", setter, person, properties }) => {
  return (
    <div>
      <p>
        <input
          type={type}
          placeholder={properties}
          onChange={(e) => {
            setter({
              ...person,
              [properties]: e.target.value,
            });
          }}
          value={person[properties]}
        />
      </p>
    </div>
  );
};

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    description: "",
  });
  const [displayData, setDisplayData] = useState(false);
  return (
    <>
      <div className="flex items-center content-center">
        <h1>Form React</h1>
      </div>

      <div className="flex justify-between">
        <div
          className="flex content-center items-center direction-column"
          style={{ height: 150, width: "50vw" }}
        >
          <h1>Please fill out the form below</h1>
        </div>
        <div
          className="flex content-center items-center direction-column"
          style={{ height: 150, width: "50vw" }}
        >
          <h1>Content</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div style={{ height: 15, width: "50vw", marginLeft: 350 }}>
          <InputGreeting
            properties={"firstName"}
            setter={setPerson}
            person={person}
          />
          <InputGreeting
            properties={"lastName"}
            setter={setPerson}
            person={person}
            cols="20"
            rows="1"
          />
          <InputGreeting
            type="date"
            properties={"dateOfBirth"}
            setter={setPerson}
            person={person}
            cols="20"
          />
          <InputGreeting
            type="text-area"
            setter={setPerson}
            properties={"description"}
            person={person}
            cols="30"
            rows="3"
          />
        </div>
        <div style={{ height: 15, width: "50vw", marginRight: -400 }}>
          {displayData && (
            <code style={{ fontSize: 14 }}>
              <div>First name: {JSON.stringify(person.firstName)}</div>
              <div>Last name: {JSON.stringify(person.lastName)}</div>
              <div>Date of Birth: {JSON.stringify(person.dateOfBirth)}</div>
              <div>Description: {JSON.stringify(person.description)}</div>
            </code>
          )}
        </div>
      </div>
      <div
        className="flex items-center content-center"
        style={{ marginTop: 250, height: "50px" }}
        size="lg"
      >
        <button
          onClick={(e) => {
            setDisplayData(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;