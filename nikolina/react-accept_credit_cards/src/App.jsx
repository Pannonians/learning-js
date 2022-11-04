import { useEffect, useState } from "react";
import "./App.css";

var cardTypes = {
  visa: {
    type: "VISA",
    partialPattern: /^4/,
  },
  master: {
    type: "MASTER",
    partialPattern: /^5/,
  },
};

const InputField = ({
  type = "text",
  setter,
  creditCardHolder,
  properties,
}) => {
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

const CreditCardInput = ({ setParentCreditCard }) => {
  const [creditCardNumber, setCreditCardNumber] = useState("");

  const formatAndSetCardSpace = (e) => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substring(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    setCreditCardNumber(spacedNumber);
    setParentCreditCard(spacedNumber);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          placeholder="Enter credit card number"
          onChange={formatAndSetCardSpace}
          value={creditCardNumber}
        />
      </p>
    </div>
  );
};

const DateInput = ({ expiryDate, setExpiryDate }) => {
  return (
    <div>
      <span class="expiration">
        <input
          type="number"
          placeholder="mm"
          maxLength="2"
          size="2"
          onChange={(e) => {
            let input = e.target.value.replace(/\D/g, "");
            setExpiryDate({
              ...expiryDate,
              mm: input,
            });
          }}
        />
        <span>/</span>
        <input
          type="number"
          placeholder="yy"
          maxLength="2"
          size="2"
          onChange={(e) => {
            let inputt = e.target.value.replace(/\D/g, "");
            setExpiryDate({
              ...expiryDate,
              yy: inputt,
            });
          }}
        />
      </span>
    </div>
  );
};
function App() {
  const [creditCardHolder, setCreditCardHolder] = useState({
    firstName: "",
    lastName: "",
    creditCard: "",
    cardType: "",
    cvs: "",
  });

  const [expiryDate, setExpiryDate] = useState({
    mm: "",
    yy: "",
  });

  const setCreditCardNumber = (creditCardNumber) => {
    setCreditCardHolder({ ...creditCardHolder, creditCard: creditCardNumber });
  };

  const [displayData, setDisplayData] = useState(false);

  useEffect(() => {
    if (
      creditCardHolder.creditCard
        .toString()
        .match(cardTypes.master.partialPattern)
    )
      creditCardHolder.cardType = cardTypes.master.type;
    else if (
      creditCardHolder.creditCard
        .toString()
        .match(cardTypes.visa.partialPattern)
    )
      creditCardHolder.cardType = cardTypes.visa.type;
    else {
      creditCardHolder.cardType = "neither Visa or Master";
    }
  });

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
          <CreditCardInput
            setParentCreditCard={setCreditCardNumber}
            cols="20"
            rows="1"
          />
          <div>
            <DateInput expiryDate={expiryDate} setExpiryDate={setExpiryDate} />
          </div>
          <InputField
            type="number"
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
              <div>
                First name: {JSON.stringify(creditCardHolder.firstName)}
              </div>
              <div>Last name: {JSON.stringify(creditCardHolder.lastName)}</div>
              <div>
                Credit Card Number:{JSON.stringify(creditCardHolder.creditCard)}
              </div>
              <div>Card Type: {JSON.stringify(creditCardHolder.cardType)}</div>
              <div>
                Valid Thru:{JSON.stringify(expiryDate.mm + "/" + expiryDate.yy)}
              </div>
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
            const max_cardnumber = 19;
            const max_cvsnumber = 4;
            const d = new Date();
            const month = d.getMonth() + 1;
            const year = d.getFullYear().toString().substring(2);

            if (
              creditCardHolder.creditCard.toString().length < max_cardnumber ||
              creditCardHolder.creditCard.toString().length > max_cardnumber
            ) {
              return alert("Credit Card can only contain 16 numbers");
            } else if (creditCardHolder.cvs.toString().length > max_cvsnumber) {
              return alert("cvs number can contain maximum 4 numbers");
            } else if (
              parseInt(expiryDate.yy) < parseInt(year) ||
              (parseInt(expiryDate.yy) === parseInt(year) &&
                month > parseInt(expiryDate.mm))
            ) {
              alert("The expiry date is in the past");
            } else setDisplayData(true);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
