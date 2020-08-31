import React, {useState} from 'react';

function useInput(initialState) {
    const [value, setValue] = useState(initialState);
    const onChange = (event) => {
        setValue(event.target.value);
    }
    const clear = () => {
        setValue('');
    }

    return {
        bind: { value, onChange },
        value,
        clear
    }
}

function App() {
    const input = useInput('')

    return (
        <div className="container pt-3">
            <input type={"text"} {...input.bind} />
            <button className="btn btn-warning" onClick={() => input.clear()}>Clear</button>
            <hr />
            <h1>{input.value}</h1>
        </div>
    );
}

export default App;
