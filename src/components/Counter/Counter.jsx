import React, { useState } from "react";
import './Counter.scss';

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counter);

    const increase = () => {
        setCounter(counter +1);
    };

    const decrease = () => {
        if (counter > 0) {
            setCounter(counter -1);
        } else {
            alert('Counter is in 0!')
        }
    };

    return (
    <div className="counterCont">
        <button onClick={() => decrease()}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => increase()}>+</button>
    </div>
    )
};

export default Counter;