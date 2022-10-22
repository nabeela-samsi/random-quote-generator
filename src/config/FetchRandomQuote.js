import { useEffect, useState } from "react";

const FetchRandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const url = "https://dummyjson.com/quotes/random";

  useEffect(() => {
    fetch(url)
      .then(async (data) => {
        if (data.status === 404) throw new Error("Could not find the user");
        let responseData = await data.json();
        if (responseData) {
          setRandomQuote(responseData);
        }
        setLoading(false);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        setLoading(false);
      });
  }, [url]);

  return { randomQuote, loading, errorMessage };
};

export default FetchRandomQuote;
