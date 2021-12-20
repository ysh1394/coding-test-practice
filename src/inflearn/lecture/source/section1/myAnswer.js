const question1 = (a, b, c) => {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return;
};

const question2 = (a, b, c) => {
  let answer;
  let maxLength;
  if (a > b) maxLength = a;
  else maxLength = b;
  if (c > maxLength) maxLength = c;

  if (a + b <= maxLength || b + c <= maxLength || a + c <= maxLength) {
    answer = 'NO';
  } else {
    answer = 'YES';
  }
  return answer;
};

const question3 = (a) => {
  let answer = Math.ceil(a / 12);
  return answer;
};

const question4 = (a) => {
  let answer = 0;
  for (let i = 1; i <= a; i++) {
    answer += i;
  }
  return answer;
};

const question5 = () => {
  // input sample
  const arr = [5, 3, 7, 11, 2, 15, 17];
  let answer,
    min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      answer = arr[i];
    }
  }
  return answer;
};

const question6 = () => {
  // input sample
  const arr = [12, 77, 38, 41, 53, 92, 85];
  let answer;
  const odd = arr.filter((i) => i % 2 !== 0);
  let min = odd[0];
  const sum = odd.reduce((prev, curr) => prev + curr);
  for (let i = 0; i < odd.length; i++) {
    if (min > odd[i]) {
      min = odd[i];
    }
  }
  answer = [sum, min];

  return answer;
};
