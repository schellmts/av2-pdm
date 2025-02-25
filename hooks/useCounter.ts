import {useState} from "react";

export function useCounter() {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(counter + 1);
    return { counter, increment };
}