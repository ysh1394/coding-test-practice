// Objective
// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task
// Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints
// The length of string s is >= 3.
// String s consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string s beginning with and ending in the same vowel.

// Sample Input 0
// bcd

// Sample Output 0
// false

// Explanation 0
// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1
// abcd

// Sample Output 1
// false

// Explanation 1
// This string ends in a consonant, so it cannot start and end with the same vowel.

// Sample Input 2
// abcda

// Sample Output 2
// true

// Explanation 2
// This string starts and ends with the same vowel (a).

// Sample Input 3
// abcdo

// Sample Output 3
// false

// Explanation 3
// This string starts with the vowel a but ends in the vowel o.

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

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  const s = 'ad1aaada';
  const re = /^([aeiou]).+\1$/;
  // 정규 표현식 정리
  // //(슬래쉬두개) = / 슬래쉬안쪽에 검색하고자 하는 내용 작성 /
  // ^(^표시) = 문자열 중 가장 앞쪽에 문자 (ex : /^a/ -> abdfd 문자열이라면 true)
  // ()(소괄호) = 그룹으로 묶어서 조회 (앞 그룹부터 1, 2, 3, 4 순서)
  // [](대괄호) = 조회하고자하는 내용들의 범위를 설정해줌 (ex : /[a-zA-Z0-9]/ -> a-z,A-Z,0-9 모두 조회)
  // .(마침표) = 줄바꿈이 되지 않은 어떠한 글자 (숫자, 문자 등등)
  // +(더하기) = .(어떠한 글자)뒤에 1개 이상의 문자들
  //  -> *(별)이 아닌+(더하기) 표시를 한 이유 : s는 s >= 3 이기 때문에, 무조건 1개의 글자는 있어야함
  // \1 = 그룹 1번의 선택값과 동일한 값
  // $ = 그룹 1번의 선택값과 동일한 값이 가장 마지막에 있을 때 true

  /*
   * Do not remove the return statement
   */
  return re;
}
