import React, { useState } from 'react'
import './cStyles.css'
import {quotes} from './quotes.json'


export function QuoteText() {
  
  let [index, setIndex] = useState(0);
  const handleIndex = () => {
    index = Math.floor(Math.random() * quotes.length);
    setIndex(index);
  }

  let currentUrl = window.location.href;
  let TweetUrl = "https://twitter.com/intent/tweet?url=" + currentUrl + "&text=" + encodeURIComponent(quotes[index].quote) + encodeURIComponent(quotes[index].author);
  
    return (
        <div className="container-text">
          <div className="container-text2 d-flex justify-content-center align-items-center">
            <h2>{quotes[index].quote}</h2>
          </div>

          <div className="container-author d-flex justify-content-end align-items-center">
            <h4 className="mr-3">-{quotes[index].author}</h4>
          </div>

          <div className="box-button d-flex justify-content-between align-items-center">
          <a href={TweetUrl}>
                <i class="fab fa-twitter"></i>
            </a>
            <button className="btn button-quote mt-3 font" onClick={handleIndex}>Next Quote</button>
          </div>
        </div>
    )
}
