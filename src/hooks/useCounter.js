import { useState } from "react";

export const useCounter = (initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue);
    const addValue = (value) => {
        if(value > 0 && value != NaN){
            setCounter(counter + value);
        }
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const subtractValue = (value) => {
        if(value > 0 && value != NaN){
            setCounter(counter - value);
        }
    }


    return {
        counter,
        addValue,
        reset,
        subtractValue
    }
}