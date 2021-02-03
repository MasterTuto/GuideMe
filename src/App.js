import React, { useState } from 'react';

import db from './db/output.json';

console.log(db);

function App() {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <h1>You have clicked {count} times on the buttons</h1>
            <button onClick={() => setCount(count+1)}>Clique em mim!</button>
        </>
    )
}

export default App;