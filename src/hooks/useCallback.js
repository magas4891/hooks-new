import React, {useState, useMemo, useCallback} from 'react';
import ItemList from "./itemList";

function App() {
    const [number, setNumber] = useState(10);
    const [colored, setColored] = useState(false);

    const styles = {
        color: colored ? 'green' : 'black'
    }

    const getItemsFromAPI = useCallback(() => {
        return new Array(number).fill('').map((_, index) => `Value ${index + 1}`);
    }, [number]);

    return (
        <div>
            <h1 style={styles}>Number: {number}</h1>
            <button className="btn btn-primary" onClick={() => setNumber(prev => prev + 1)}>+ 1</button>
            <button className="btn btn-danger" onClick={() => setNumber(prev => prev - 1)}>- 1</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>Change color</button>
            <ItemList getItems={getItemsFromAPI} />
        </div>
    );
}

export default App;
