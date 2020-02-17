/* eslint-disable arrow-body-style */
import React from 'react';
import { simpleDemo } from '../graphs/demo';

const App = () => {
    return (
        <>
            <div>
                <h1>Algorithmes and graphs</h1>
            </div>
            <div>
                <button onClick={simpleDemo}>Press and check console</button>
            </div>
        </>
    );
};

export default App;
