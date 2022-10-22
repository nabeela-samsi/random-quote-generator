import React from "react";
import FetchRandomQuote from "../config/FetchRandomQuote";

export const DisplayQuote = () => {
  const { randomQuote, loading, errorMessage } = FetchRandomQuote();

  return loading ? (
    <p>Loading...</p>
  ) : errorMessage ? (
    <p>{errorMessage}</p>
  ) : (
    <div>
      <p id="text">
        <q> {randomQuote.quote} </q>
      </p>
      <p id="author" className="center">
        -{randomQuote.author}
      </p>
    </div>
  );
};
