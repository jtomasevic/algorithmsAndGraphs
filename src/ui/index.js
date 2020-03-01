/* eslint-disable react/no-unescaped-entities */
/* eslint-disable arrow-body-style */
import React from 'react';
import { simpleDemo, MatrixInit } from '../graphs/demo';
import { insertBstDemo } from '../bst/demo';
import { ifUnique, ifUnique2, isItPermutation, URLifyStr, checkForPalindrom, stringCompression } from '../arrayAndLists';

const App = () => {
    const checkIfUnique = () => {
        const str = document.getElementById('uniqueString');
        const result = ifUnique(str.value);
        document.getElementById('checkIfUniqueResult').innerHTML = result;
    };
    const checkIfUnique2 = () => {
        const str = document.getElementById('uniqueString');
        const result = ifUnique2(str.value);
        document.getElementById('checkIfUniqueResult2').innerHTML = result;
    };
    const checkPemutation = () => {
        const str1 = document.getElementById('str1').value;
        const str2 = document.getElementById('str2').value;
        const result = isItPermutation(str1, str2);
        document.getElementById('checkPermutation').innerHTML = result;
    };
    const checkURLifyStr = () => {
        const str = document.getElementById('URLifyStr').value;
        const result = URLifyStr(str);
        document.getElementById('URLifyValue').value = result;
    };
    const checkIfItsPalindrom = () => {
        const result = checkForPalindrom(document.getElementById('palindromStr').value);
        document.getElementById('isItPalindrom').innerHTML = result;
    };
    const compreseStr = () => {
        const result = stringCompression(document.getElementById('forCompression').value);
        document.getElementById('compresedString').innerHTML = result;
    };
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
            <div>
                <h1>Arrays</h1>
                <h3> Does string has all unique chars</h3>
                <input id='uniqueString'/>
                <br/>
                <button onClick={checkIfUnique}>Check if its unique</button>
                <label id='checkIfUniqueResult'/>
                <br/>
                <button onClick={checkIfUnique2}>Check if its unique 2</button>
                <label id='checkIfUniqueResult2'/>
                <h3> Given two strings, write a method to decide if one is a permutation of the other</h3>
                <input id='str1'/>
                <br/>
                <input id='str2' />
                <button onClick={checkPemutation}>Check for permutation</button>
                <br/>
                <label id='checkPermutation'/>
                <h3>Write a method to replace all spaces in a string with '%20'.</h3>
                <input id='URLifyStr' />
                <button onClick={checkURLifyStr}>Show urlify string</button>
                <br/>
                <input id='URLifyValue'/>
                <h3>Palindrome Permutation</h3>
                <div>
                Given a string, write a function to check if it is a permutation of a palindrome.
                </div>
                <input id='palindromStr'/>
                <button onClick={checkIfItsPalindrom}>Check if its palindrom</button>
                <br/>
                <label id='isItPalindrom'/>
                <h3>Strin compression</h3>
                <input id='forCompression'/>
                <button onClick={compreseStr}>Compress</button>
                <br/>
                <label id='compresedString'/>

            </div>
        </>
    );
};

export default App;
