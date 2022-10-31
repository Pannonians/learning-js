import { useState } from "react";
import "./App.css";

const InputField = ({ type = "text", setter, creditCardHolder, properties }) => {
  return (
    <div>
      <p>
        <input
          type={type}
          placeholder={properties}
          onChange={(e) => {
            setter({
              ...creditCardHolder,
              [properties]: e.target.value,
            });
          }}
          value={creditCardHolder[properties]}
        />
      </p>
    </div>
  );
};

function App() {
  const [creditCardHolder, setCreditCardHolder] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    date: "",
    cvs: "",
  });
  const [displayData, setDisplayData] = useState(false);
  return (
    <>
      <div className="flex items-center content-center">
        <h1>Credit Card Details</h1>
      </div>

      <div className="flex justify-between">
        <div
          className="flex content-center items-center direction-column"
          style={{ height: 150, width: "50vw" }}
        >
          <h1>Please fill out the details below</h1>
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
          <InputField
            properties={"firstName"}
            setter={setCreditCardHolder}
            creditCardHolder={creditCardHolder}
          />
          <InputField
            properties={"lastName"}
            setter={setCreditCardHolder}
            creditCardHolder={creditCardHolder}
            cols="20"
            rows="1"
          />
          <InputField
          properties={"cardNumber"}
          setter={setCreditCardHolder}
          creditCardHolder={creditCardHolder}
          cols="20"
          rows="1"
          />
          <InputField
            properties={"date"}
            setter={setCreditCardHolder}
            creditCardHolder={creditCardHolder}
            cols="20"
          />
          <InputField
            properties={"cvs"}
            setter={setCreditCardHolder}
            creditCardHolder={creditCardHolder}
            cols="30"
            rows="3"
          />
        </div>
        <div style={{ height: 15, width: "50vw", marginRight: -400 }}>
          {displayData && (
            <code style={{ fontSize: 14 }}>
              <div>First name: {JSON.stringify(creditCardHolder.firstName)}</div>
              <div>Last name: {JSON.stringify(creditCardHolder.lastName)}</div>
              <div>Credit Card Number: {JSON.stringify(creditCardHolder.cardNumber)}</div>
              <div>Valid Thru: {JSON.stringify(creditCardHolder.date)}</div>
              <div>CVS: {JSON.stringify(creditCardHolder.cvs)}</div>
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