import React from "react";
import { useState } from "react";
import "./quote.css";

const Quote = () => {

    let quotes = [];


    async function loadQuote() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
        
    }

     const [quote, setQuote] = useState({
  text:
   "You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground",
  author: "- Unknown",
 });

    const [bg, setBg] = useState({
     color: "beige",
    });
    
    loadQuote();
    
    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
        const randomColor =
         "#" + Math.floor(Math.random() * 16777215).toString(16);
        setBg({ color: randomColor });
    }
    
    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(",")[0]}`);
    }
  
 return (
  <div className="body-bg" style={{ backgroundColor: bg.color }}>
   <div id="quote-box" style={{ color: bg.color }}>
    <div id="text">''{quote.text}</div>
    <div id="author"> - {quote.author.split(",")[0]}</div>
    <div className="clicks">
     <div className="left">
      <button id="tweet-quote" onClick={()=>{twitter()}} style={{ backgroundColor: bg.color }}>
        Twitter
      </button>
      <button style={{ backgroundColor: bg.color }}>Trimble</button>
     </div>
     <div className="right">
      <button onClick={random} style={{ backgroundColor: bg.color }}>
       New Quote
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Quote;
