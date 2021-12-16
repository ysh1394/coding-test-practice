const output = require('./src/index');

const express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
const app = express(); //express를 실행하여 app object를 초기화 합니다.

const port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다.
app.listen(port, function() {
  // 출력값(console.log) 확인 하는 곳
  return output;
});
