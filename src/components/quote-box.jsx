import React from 'react'
import './cStyles.css'
import {QuoteText} from './quoteText';
import { useSelector, useDispatch } from "react-redux";

export function QuoteBox() {
    const state = useSelector((value) => value.index);
    const distpatch = useDispatch();

    return (
        <div className="container">
            <QuoteText state={state} distpatch={distpatch} />
        </div>
    )
}
