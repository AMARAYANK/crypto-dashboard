import React, {useEffect} from "react";  
import axios from "axios";

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency, setExchangeRate}) => {

  useEffect(() => {
    
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: chosenPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: chosenSecondaryCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    }

    axios
      .request(options)
      .then(function (response) {
        setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      })
      .catch(function (error) {
        console.error(error);
      })
    
  }, [chosenPrimaryCurrency, chosenSecondaryCurrency]  )  // eslint-disable-next-line

    return (
      <div className='exchange-rate'>
       <h2>Exchange Rate</h2>
          <h1>{exchangeRate}</h1>
          <h4>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</h4>
      </div>
    )
}

export default ExchangeRate