import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((response) => setCurrencyInfo(response[currency]));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;