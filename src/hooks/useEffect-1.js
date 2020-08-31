import React, {useEffect, useState} from 'react';

function App() {
    const [ type, setType ] = useState('users');
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]);

    return (
        <div>
            <h2>Resource: {type}</h2>
            <button
                className="btn btn-primary"
                onClick={() => setType("users")}>
                Users
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setType("todos")}>
                Todos
            </button>
            <button
                className="btn btn-primary"
                onClick={() => setType("posts")}>
                Posts
            </button>
            <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
        </div>
    );
}

export default App;
