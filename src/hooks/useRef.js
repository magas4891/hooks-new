import React, {useEffect, useRef, useState} from 'react';

function App() {
    const [ value, setValue ] = useState("initial");
    const counterRef = useRef(1);
    const inputRef = useRef(null);
    const valueRef = useRef('');

    useEffect(() => {
        counterRef.current++;
        console.log(inputRef.current.value);
    });

    useEffect(() => {
        valueRef.current = value;
    });

    const focus = () => {
        inputRef.current.focus();
    };


    return (
        <div>
            <h2>Render count: {counterRef.current}</h2>
            <h2>Prev value: {valueRef.current}</h2>
            <input
                type="text"
                ref={inputRef}
                onChange={(event) => setValue(event.target.value)}
                value={value}/>
            <button className="btn btn-success" onClick={focus}>Focus</button>
        </div>
    );
}

export default App;
