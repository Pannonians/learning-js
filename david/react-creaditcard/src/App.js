import { useEffect, useState } from "react"
import "./App.css";

const cardTypes = {
  visa: {
    type: "VISA",
    partialPattern: /^4/,
  },
  master: {
    type: "MASTER",
    partialPattern: /^5/,
  },
};

function App() {
  const [fullName, setFullName] = useState('')
  const [creaditCard, setCreaditCard] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvs, setCvs] = useState('')
  const [cardType, setCardType] = useState('')

  //handle sumbit 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  //card type 
  useEffect(() => {
    if (creaditCard.toString().match(cardTypes.master.partialPattern)
    )
      setCardType((cardType) => cardTypes.master.type)
    else if (
      creaditCard.toString().match(cardTypes.visa.partialPattern)
    )
      setCardType((cardType) => cardTypes.visa.type)
    else {
      setCardType((cardType) => "neither Visa or Master")
    }
  },[creaditCard]);

  //Display data 
  const [displayData, setDisplayData] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Creadit card form</h1>
        <h2>Please enter requested info</h2>
      </div>
      <div className="App-container">
        <form onSubmit={handleSubmit}>
          <div>
            <p>Enter your name</p>
            <input
              type="text"
              value={fullName}
              placeholder="Enter your name"
              onChange={(e) => setFullName(e.target.value.replace(/[^a-z]/gi, ' '))}
            />
            <p>Creadit card number</p>
            <input
              type="text"
              value={creaditCard}
              placeholder="Creadit card number"
              onChange={(e) => setCreaditCard(e.target.value.replace(/\D/g, "").replace(/(\d{4}(?!\s))/g, "$1 ").substring(0, 19))}
            />
            <div>
              <p>Expiry date</p>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value.replace(
                  /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
                ).replace(
                  /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
                ).replace(
                  /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
                ).replace(
                  /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
                ).replace(
                  /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
                ).replace(
                  /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
                ).replace(
                  /\/\//g, '/' // Prevent entering more than 1 `/`
                )
                )}
                maxLength="5"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <p>CVS</p>
              <input
                type="text"
                value={cvs}
                onChange={(e) => setCvs(e.target.value.replace(/\D/g, ""))}
                maxLength="4"
                placeholder="CVS"
              />
            </div>
          </div>
          <br></br>
          <div>
            <button
              onClick={(e) => {
                const max_cardnumber = 19
                const min_cvsnumber = 3
                const d = new Date()
                const month = d.getMonth() + 1
                const year = d.getFullYear().toString().substring(2)
                const splitDate = expiryDate.split('/')

                if (
                  creaditCard.toString().length < max_cardnumber ||
                  creaditCard.toString().length > max_cardnumber
                ) {
                  return alert("Credit Card must contain 16 numbers");
                } else if (cvs.toString().length < min_cvsnumber) {
                  return alert("CVS number can contain min 3 numbers");
                } else if (
                  parseInt(splitDate[1]) < parseInt(year) ||
                  (parseInt(splitDate[1]) === parseInt(year) &&
                    splitDate[0] < parseInt(month))
                ) {
                  alert("The expiry date is in the past");
                } else setDisplayData(true);
              }} >Submit
            </button>
          </div>
          <br></br>

        </form>
        <div>
          <h4>Result:</h4>
          {displayData && (
            <code>
              <div>
                Name: <br></br> <p className="App-result">{JSON.stringify(fullName)}</p>
              </div>
              <div>
                Credit Card Number: <br></br> <p className="App-result">{JSON.stringify(creaditCard)}</p>
              </div>
              <div>
                Expiry date: <br></br> <p className="App-result">{JSON.stringify(expiryDate)}</p>
              </div>
              <div>
                CVS: <br></br> <p className="App-result">{JSON.stringify(cvs)}</p>
              </div>
              <div>
                Card Type: <br></br> <p className="App-result">{JSON.stringify(cardType)}</p>
              </div>
            </code>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;