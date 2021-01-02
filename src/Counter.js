import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(i => i + 1);
    }

    const onDecrease = () => {
        setNumber(i => i - 1);
    }

    return (
        <div>
            <hi>{number}</hi>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;