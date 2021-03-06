// Objective

// In this challenge, we practice looping over the characters of string. Check out the attached tutorial for more details.

// Task

// First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in s.
// Second, print each consonant (i.e., non-vowel) in s on a new line in the same order as it appeared in s.
// Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

// string s: the string to process
// Prints
// Print each vowel of s in order on a new line, then print each consonant in order on a new line. Return nothing.

// Input Format
// There is one line of input with the string s.

// Output Format
// First, print each vowel in s on a new line (in the same order as they appeared in s). Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).

// Sample Input 0
// javascriptloops

// Sample Output 0
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// Explanation 0

// Observe the following:

// Each letter is printed on a new line.
// Then the vowels are printed in the same order as they appeared in s.
// Then the consonants are printed in the same order as they appeared in s.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

// 내가 푼 답
function vowelsAndConsonants(s) {
  let result = '';
  let vowels = '';
  let consonants = '';
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

  for (let x of s) {
    for (let y of vowelsArr) {
      if (x === y) {
        vowels += x;
        consonants = s.replace(/a|e|i|o|u/gi, '');
        // console.log('x,y >>>>>', x, y);
      }
    }
  }
  result = vowels + consonants;

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

// 다른 풀이
// const vowel = [ 'a', 'e', 'i', 'o', 'u' ];

// function vowelsAndConsonants(s) {
//     let { vowels, consonants } = (s.split('') || []).reduce((target, item) => {
//         target[vowel.includes(item) ? 'vowels' : 'consonants'].push(item)

//         return target;
//     }, { vowels: [], consonants: [] });

//     vowels.concat(consonants).forEach((item) => {
//         console.log(item);
//     });
// }

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
