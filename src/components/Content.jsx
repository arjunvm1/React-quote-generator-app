import React, { useEffect, useState } from "react";
import axios from "axios";
import "./quote.css";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      const quotes = response.data.quotes || [];
      const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)] || {};
      setQuote(randomQuote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <div className="container1">
        <h2>RANDOM QUOTE GENERATOR</h2>
        <h3>"{quote?.quote}"</h3>
        <p>- {quote?.author}</p>
        <button onClick={fetchRandomQuote} style={{ fontSize: "15px" }}>
          GET ANOTHER QUOTE
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
