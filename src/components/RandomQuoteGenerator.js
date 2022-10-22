import React from "react";
import { GenerateBackgroundColor } from "./GenerateBackgroundColor";
import { DisplayQuote } from "./DisplayQuote";
import { TwitterRef } from "./TwitterRef";
import { NewQuoteButton } from "./NewQuoteButton";

const RandomQuoteGenerator = () => {
  return (
    <div id="quote-box">
      <GenerateBackgroundColor />
      <DisplayQuote />
      <TwitterRef />
      <NewQuoteButton />
    </div>
  );
};

export default RandomQuoteGenerator;
