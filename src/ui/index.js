/* eslint-disable arrow-body-style */
import React from 'react';
import { simpleDemo, MatrixInit } from '../graphs/demo';
import { insertBstDemo } from '../bst/demo';

const App = () => {
    return (
        <>
            <div>
                <h1>Algorithmes and graphs</h1>
            </div>
            <div>
                <button onClick={simpleDemo} >(Press and check console)</button>
            </div>
            <div>
                <button onClick={insertBstDemo}>BST (Press and check console)</button>
            </div>
            <div>
                <button onClick={MatrixInit} >Init matrix grapha (Press and check console)</button>
            </div>
        </>
    );
};

export default App;
