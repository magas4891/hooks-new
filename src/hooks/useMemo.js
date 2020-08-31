import React, {useState, useMemo} from 'react';

function computeNumbers(num) {
    let i = 0;
    while ( i < 100000000) i++;
    return num * 2;
}

function App() {
    const [number, setNumber] = useState(12);
    const [colored, setColored] = useState(false);

    const styles = useMemo(() => ({
        color: colored ? 'green' : 'black'
    }), [colored])

    const computed = useMemo( () => {
        return computeNumbers(number);
    }, [number])

    return (
        <div>
            <h1 style={styles}>Number: {computed}</h1>
            <button className="btn btn-primary" onClick={() => setNumber(prev => prev + 1)}>+ 1</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>- 1</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change color</button>
        </div>
    );
}

export default App;
