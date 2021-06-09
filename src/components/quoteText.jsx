import React from 'react'
import './cStyles.css'
import { next } from "./actions/actionReducer"
import {quotes} from './quotes.json'


export function QuoteText({distpatch, state}) {  
    return (
        <div className="container-text">
          <div className="container-text2 d-flex justify-content-center align-items-center">
            <h2>{quotes[state].quote}</h2>
          </div>

          <div className="container-author d-flex justify-content-end align-items-center">
            <h4 className="mr-3">-{quotes[state].author}</h4>
          </div>

          <div className="box-button d-flex justify-content-between align-items-center">
          <a href={`https://twitter.com/intent/tweet?text=${quotes[state].quote + quotes[state].author}`}>
                <i class="fab fa-twitter"></i>
            </a>
            <button className="btn button-quote mt-3 font" onClick={() => {
              distpatch(next())
            }}>Next Quote</button>
          </div>
        </div>
    )
}
