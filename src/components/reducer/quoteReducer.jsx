import {quotes} from '../quotes.json';

const INITIAL_STATE = {
    index: 0
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "next":
            return {
            index: Math.floor(Math.random() * quotes.length)
            }
        default:
            return state;
    }
}