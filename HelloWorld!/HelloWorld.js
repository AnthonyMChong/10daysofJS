"use strict";

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    console.log('on data!');
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    console.log('on end!');
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    console.log('in readline!');
    return inputString[currentLine++];
}

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}


function main() {
    console.log('in main!');

    const parameterVariable = readLine();
    
    greeting(parameterVariable);
}