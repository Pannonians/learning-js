import { useState } from "react";
import "./App.css";

const InputGreeting = ({
  setFirstName,
  setLastName,
  setDateOfBirth,
  setDescription,
}) => {
  return (
    <div>
      <h3>Welcome User!</h3>
      <h1>Please enter the details below to continue!</h1>
      <p>hit enter to confirm</p>
      <p>
      <input
        type="text"
        onKeyDown={(e) => {
          if (["Enter", "NumpadEnter"].includes(e.code)) {
            setFirstName(e.target.value);
          }
        }}
        placeholder="What's your first name?"
      />
      </p>
      <p>
      <input
        type="text"
        onKeyDown={(e) => {
          if (["Enter", "NumpadEnter"].includes(e.code)) {
            setLastName(e.target.value);
          }
        }}
        placeholder="What's your last name?"
      />
      </p>
      <p>
      <input
        type="text"
        onKeyDown={(e) => {
          if (["Enter", "NumpadEnter"].includes(e.code)) {
            setDateOfBirth(e.target.value);
          }
        }}
        placeholder="What's your date of birth?"
      />
      </p>
      <p>
      <input
        type="text"
        onKeyDown={(e) => {
          if (["Enter", "NumpadEnter"].includes(e.code)) {
            setDescription(e.target.value);
          }
        }}
        placeholder="Write something about yourself?"
      />
      </p>
    </div>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {firstName&&lastName&&dateOfBirth&&description ? (
          <>
            <div>Please Enter the details below</div>
            <InputGreeting
              firstName={setFirstName}
              lastName={setLastName}
              dateOfBirth={setDateOfBirth}
              description={setDescription}
            />
            <button type="button" onClick={() => setDateOfBirth}>
            </button>
          </>
        ) : (
          <InputGreeting />
        )}
      </header>
    </div>
  );
}

export default App;
