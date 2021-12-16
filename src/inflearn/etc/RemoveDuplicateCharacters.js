// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고
// 출력하는 프로그램을 만드세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 중복 문자 제거

// new 인스턴스 사용해서 푼 답
function instanceSample(x) {
  let arr = x.split('');
  const set = new Set(arr);
  const newArr = [...set];
  const answer = newArr.join('');
  return answer;
}

console.log('instanceSample (x) >>>', instanceSample('saaadasssddd'));

// 인덱스오브, 필터로 푼 답 (구글링 후 푼 답)
function solution(x) {
  let arr = x.split('');
  const filtering = arr.filter((el, idx) => {
    return arr.indexOf(el) === idx;
  });
  const answer = filtering.join('');
  return answer;
}

console.log('answer >>>', solution('aaab'));

// 인덱스 오브로만 (풀이)
function indexOfSample(x) {
  let answer = '';
  for (let i = 0; i < x.length; i++) {
    console.log(x.indexOf(x[i]), x[i], i);
    if (x.indexOf(x[i]) === i) {
      answer += x[i];
    }
    console.log('final x[i]>>>', x[i]);
    console.log('answer>>>', answer);
  }

  return answer;
}

console.log('indexOfSample(x) >>>>>>', indexOfSample('vkkldpepp'));
