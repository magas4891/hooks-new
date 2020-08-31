import React, {useEffect, useState} from 'react';

function App() {
    const [ pos, setPos ] = useState({
        x: 0, y: 0
    });

    const mouseMove = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        });
    }

    useEffect(() => {
        console.log("ComponentDidMount");

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    })

    return (
        <div>
            <pre>
                {JSON.stringify(pos, null, 2)}
            </pre>
        </div>
    );
}

export default App;
