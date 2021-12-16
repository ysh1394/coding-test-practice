// 각 폴더에 있는 문제들 중 풀고자 하는 문제를 여기서 테스트 해볼 수 있음

const solution = () => {
  // let answer; // 삭제 금지
  // input sample
  const arr = [12, 77, 38, 41, 53, 92, 85];
  let answer;
  const odd = arr.filter((i) => i % 2 !== 0);
  let min = odd[0]
  const sum = odd.reduce((prev, curr) => prev + curr);
  for (let i = 0; i < odd.length; i++) {
    if (min > odd[i]) {
      min = odd[i]
    }
  }
  answer = [sum, min];
  console.log('output >>>>', answer); // 삭제 금지
};

const output = solution();

exports.output = output;
