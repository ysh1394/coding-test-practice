// 한개의 문자열을 입력 받고, 특정 문자를 입력받아 해당 특정문자가
// 입력받은 문자열에게 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

// 내가 푼 거
function text(x, y) {
  let count = 0
  for (let i = 0; i < x.length; i++) {
    const findText = x.indexOf(y,i)
    if ( findText !== -1 && i === findText) {
      count += 1;
    }
  }
  return count
}

text('computerprograming', 'r')


// 제대로 된 답
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) {
      answer++;
    }
  }
  return answer
}

solution('computerprograming', 'r')