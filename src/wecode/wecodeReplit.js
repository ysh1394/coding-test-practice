/*

  let input = [20, 200, 23, 1, 3, 9];
  for (let num = 0; num < input.length; num++){
    let min = input[0];
    if(input[0] > input[num] && input[num] < input[num++]){
      console.log (input[num]=[num]);
    }
  }





function findSmallestElement(arr){

  if(arr.length === 0) {
    return 0; //빈 배열이면 0을 리턴
  }
  else { 
    let min = arr[0];
    // 변수 min에 배열의 아무 값을 임의로 설정. (가상의 최솟값)
    for (i = 0 ; i < arr.length; i++) {
      if (arr[i] < min ) {
        min = arr[i];
      } 
    } return min;  
  }
  
}

findSmallestElement([20, 200, 23, 1, 3, 9])
*/
  /* if (input[num.length] > 0){
      return "num[1]"
      
    } */
/*    if (input.length === 0){
      return 0;
    }
    else (){
      return   
    } */

    

/*  
  - findSmallestElement 함수를 구현해 주세요.
  - findSmallestElement 의 arr 인자는 숫자 값으로만 이루어진 array 입니다.
  - array 의 값들 중 가장 작은 값을 리턴해주세요.
  - 만일 array가 비어있으면 0을 리턴해주세요.
  - 예를 들어, 다음과 같은 array이 인자(input)으로 들어왔다면 1이 리턴되어야 합니다.
    ```jsx
    [20, 200, 23, 1, 3, 9]
    ```
    */
  // your code here


/*
let cities = [];


cities[0] = "서울";
cities[1] = "대전";
cities[2] = "대구";

cities[6] = "제주도";

cities.push("경주", "전주")
cities.unshift("인천")

console.log (cities);


let day = ['m', 's', 'w', 't'];
day[1] = 't';
day[4] = 'f';
day[5] = 's'; // 방법 (1)

console.log(day);


let month = [1, 2, 3, 4]
month.push(5); // 방법 (2)

console.log(month);
*/

/*
function divideArrayInHalf(array) {
    let result = [];
    for (num = 0; num < num.length; num++){
      if(array[num] <= 10){
        result.unshift(array[num]);
      }
      else {
        result.push(array[num])
      }
    }
  return result;
}
result[1, 10, 5, 100, 20]; */
/*
function divideArrayInHalf(array) {
  let result = [];
  for (i=array.length-1; i >= 0; i--){    
    if (array[i] <= 10){
      result.unshift(array[i])
    } else {
      result.push(array[i])
    }
  }
  return result;
}

console.log(divideArrayInHalf
            ([1, 20, 10, 5, 100]))


function abc(a, b){
  return a+b;
  
}


console.log (1+2);
*/
/*
풀이 : divideArrayInHalf(array) 함수에 result가 배열이라는 변수를 선언하고, 총 5개의 배열 중 [1, 20, 10, 5, 100]의 인자를 넣었을 경우, [1, 10, 5, 100, 20]으로 바뀌어서 나와야함. 

  -> 5개 요소로 지정을 했기에 i=4로 정하고, 


let lastName = 'Yeri Kim';
let upperLastName = lastName.toUpperCase();
let lowerLastName = lastName.toLowerCase();

console.log(lastName);
console.log(upperLastName);
console.log(lowerLastName);


let phoneNumber = 1012349876;

console.log(phoneNumber);
console.log(phoneNumber.length); 


let info = "JavaScript는 프로래밍 언어이다.";
let firstChar = info.indexOf("프로래밍"); 

console.log(info, firstChar);



if (firstChar !== -1) { 
  info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length); 
}
console.log(info);


let a = "abcde f";
let b = a.slice(0);

console.log(b);


let test = ["경기도", "성남시", "분당구"];
console.log(test.slice(1));

      
function sliceCityFromAddress(address) {
  let result = [];
  for (i=0; i<address.length; i++){
    if (address[i] === 1) {
      return address.slice(2)
    }
    else {
      return address.slice(0,1) + address.slice(2)
    }
  }
  
}

console.log (sliceCityFromAddress(["경상북도", "상주시", "등촌동"])); 
*/
/*
let info = "JavaScript는 프로래밍 언어이다.";
let firstChar = info.indexOf("프로래밍"); 


console.log(info, firstChar);

if (firstChar !== -1) { 
  info = info.slice(0, firstChar) + "프로그래밍" + info.slice(firstChar+4, info.length); 
}
console.log(info);
*/
/*
function sliceCityFromAddress(address) {
  let result = address.indexOf("시 ")
  let other = address.indexOf("도 ")
    if (result !== -1 && result !== -1){
      return address.slice(0, other+2) + address.slice(result+2,address.length) 
    }
    else if (result !== -1){
      return address.slice(result);
    }
    if (result === -1 && result2 === -1) {
      return address;
    }
}

console.log (sliceCityFromAddress("서울특별시 강서구 등촌동")); 
*/

/*
function sliceCityFromAddress(address) {
  let result = address.indexOf("시 ")
  let other = address.indexOf("도 ")
    if (result !== -1 && other !== -1){
      return address.slice(0, other+2) + address.slice(result+2, address.length)
    }
    else if (result !== -1){
      return address.slice(result+2);
    }
    else {
      return address;
    }
}

console.log (sliceCityFromAddress("경기도 의정부시 땡땡땡")); 


let a = '900';  
let b = 350; 
let c = Math.random(); 
let d = '5' + 5; 

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);;
console.log(typeof a);


console.log('200'+'10');
console.log('200'-'10');
console.log(200+'11');
console.log('200'+11);
console.log('200'-'안녕');

console.log(2019+"2000");
console.log(2019-"2000");

var birthYearInput = "2000";
console.log(typeof birthYearInput);

var numberBirthYear = Number(birthYearInput);
console.log(typeof numberBirthYear);


parseInt("1.901");
parseFloat("1.901");
Number("1.901");
parseInt("200") + 1;


var numberAsNumber = 1234; 
var numberAsString = numberAsNumber.toString();


console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);


var numberAsNumber = 1234; 
var numberAsString = 1234 + "";


console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);


var numberAsNumber = "1234"; 
var numberAsString = numberAsNumber - 0;


console.log(numberAsNumber, typeof numberAsNumber);
console.log(numberAsString, typeof numberAsString);



let birthYear1 = "2000";
let currentYear1 = 2019;
if (currentYear1 - birthYear1 < 14) {
  alert("가입할 수 없습니다.");
}
*/
/*
const birthYear = "1936";
const currentYear = 2000;

if (currentYear-birthYear < 65) {
   console.log ("앞으로 " + (65- (currentYear-birthYear)) + "년 남으셨습니다");
}
*/

/*
function nationalPensionRemainingYearCount(age_string) {
  const age = age_string.toString();
  if (65 - age >= 0) {
   return "앞으로 " + (65 - age) + "년 남으셨습니다" 
  }
}

nationalPensionRemainingYearCount("35");

*/
/*
var rightNow = new Date();
console.log(rightNow);
*/

// 예) 2월 18일 월요일 19:45
/*
let rightNow1 = new Date();
let year1 = rightNow1.getFullYear();
let month1 = rightNow1.getMonth()+1;
let date1 = rightNow1.getDate();
let day1 = rightNow1.getDay();
let currentHour1 = rightNow1.getHours();
let currentMin1 = rightNow1.getMinutes();

console.log(rightNow1);
console.log(year1);
console.log(month1);
console.log(date1);
console.log(day1);
console.log(currentHour1);
console.log(currentMin1);

let time1 = rightNow1.getTime();
console.log(time1);
// getTime 함수는 밀리초로 환산하며, 1970년 1월 1일 부터 계산된 밀리초임. !!중요!!

let date3 = new Date('December 17, 2019 03:24:00');
let date4 = new Date('2019-12-17T03:24:00');
let date5 = new Date(2019, 5, 1);

console.log (date3);
console.log (date4);
console.log (date5);

let date6 = new Date();
console.log (date6);


function getWesternAge(birthday) {
  let birth = new Date(birthday);
  let today = new Date();
  let birthYear = birth.getFullYear(); 
  let rightYear = today.getFullYear();
  let oneYear = 1;
  let age = rightYear - birthYear - oneYear;

  if (birth.getMonth() > today.getMonth()) {
    return rightYear - birthYear - oneYear;
  } else if (birth.getMonth() === today.getMonth() && birth.getDate() > today.getDate()) { 
    return rightYear - birthYear - oneYear;
  } else {
    return rightYear - birthYear;
  }
}
  
getWesternAge('1990-03-21T00:45:06');
*/
/*
console.log(Math.round(2.5));
console.log(Math.round(2.49));
console.log(Math.round(2));
console.log(Math.round(2.82));
//반올림함수

console.log(Math.ceil(2.5));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2));
console.log(Math.ceil(2.82));
//올림함수

console.log(Math.floor(2.5));
console.log(Math.floor(2.49));
console.log(Math.floor(2));
console.log(Math.floor(2.82));
//내림함수

var randomNumber = Math.random();
console.log(randomNumber);
//랜덤함수

var randomNumber = Math.random();
console.log(Math.floor(randomNumber*10));
//랜덤함수 후, 내림
*/

/* 틀린건 아니지만 레플릿 답은 아닌 함수
function getRandomNumber (min, max) {
  let minRandom = (Math.random() * (max-min))+min; 
  let maxRandom = Math.random() * max; 
  return minRandom + maxRandom;
}
getRandomNumber (1, 1);
*/
/*
function getRandomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber (1, 10);


//객체

let plan1Name = "Basic";
let plan1Price = 3.99;
let plan1Space = 100;
let plan1Data = 1000;
let plan1Pages = 10;
let plan2Name = "Professional";
let plan2Price = 5.99;
let plan2Space = 500;
let plan2Data = 5000;
let plan2Pages = 50;
let plan3Name = "Ultimate";
let plan3Price = 9.99;
let plan3Space = 2000;
let plan3Data = 20000;
let plan3Pages = 500;


console.log(plan2Name + "플랜 가격은 한 달에 " + plan2Price + "달러입니다.")


let plan1 = {   
  name: "Basic"
};


let propertyName = "name";


console.log(plan1[propertyName]);



let myObj = {
  property1: "hello",
  property2: [1,2,3,4,5],
  property3: {
    childproperty: "haha"
  }
};
*/

/*
let name = "property";
console.log(myObj[name+"1"]);
console.log(myObj[name+"2"]);
console.log(myObj[name+"3"]);
console.log(myObj[name+"3"]["child"+name]);


console.log(myObj.property1);
console.log(myObj.property2);
console.log(myObj.property3);
console.log(myObj.property3.childproperty);
*/
/*
let name = "property1";


myObj[name] = ["hi", "hello"];


console.log(myObj);


myObj.property3.siblingproperty = [3, 6, 9];
console.log(myObj);


//객체 응용
let objData = {
  name: 50,
  address: { 
    email: "gaebal@gmail.com",
    home: "위워크 선릉2호점"
  },
  books: {
    year: [2019, 2018, 2006],
    info: [{
      name: "JS Guide",
      price: 9000
    }, {
      name: "HTML Guide",
      price: 19000,
      author: "Kim, gae bal"
    }]
  }
};

let bookName = objData.books.info[1].name;
console.log(bookName);


*/

//객체 예제
/*
let salesArr : [
    ["20190401",34], ["20190402", 23], ["20190403", 29]
              ];
let reviewArr : [
    ["20190328", 3], ["20190401", 0], ["20190403", 1]
              ];
let likeArr : [
    ["20190328", 98], ["20190401", 102], ["20190403", 125]
            ];
*/
/*
//세일즈, 리뷰, 라이크 어레이가 각각 [날짜, 판매량]을 배열 안에 배열 구조로 되어 있음, 
function getData(salesArr,reviewArr,likeArr){
  let sumSales = 0;
  let sumReviews = 0;
  let sumLikes = 0;
  // 
  
  for (let i = 0; i < salesArr.length; i++) {
    sumSales += salesArr[i][1];
  }
  for (let i = 0; i < reviewArr.length; i++) {
    sumReviews += reviewArr[i][1];
  }
  for (let i = 0; i < likeArr.length; i++) {
    sumLikes += likeArr[i][1];
  }

  let objData = {};
  objData.sumAmount = sumSales;
  objData.sumReview = sumReviews;
  objData.sumLike = sumLikes;
  
  return objData;
}

getData(["14", 1], 3, 1);



function getResult() {
  let result = 10;
  
  return result;
}


// 자바스크립트 에러! 
// getResult 내부의 scope에 접근할 수 없다
//console.log(result);

console.log(getResult(10));

//스위치문
favorite = "disneyland";
switch (favorite){
  case "mickey" :
  document.write("I Love mickey");
  break;
  case "disneyland" :
  document.write("I Love disneyland");
  break;
  case "robot" :
  document.write("I Love robot");
  break;
  case "ipad" :
  document.write("I Love ipad");
  break;
  case "apple" :
  document.write("I Love apple");
  break;
  case "macbook" :
  document.write("I Love macbook");
  break;
  default :
  document.write("nothing");
}

let plan2 ={
  a1 : "basic"
}

let a1 = "a3"
console.log(plan2[a1]);



let ray = {  
  name: 'Ray',  
  price: 2000000,   
  getName: function() {  
    return this.name;  
  },   
  getPrice: function() {  
    return this.price;  
  },   
  applyDiscount: function(discount) {  
    return this.price * discount;   
  } 
}


const rayPriceByFunction = ray.getPrice();
console.log('함수로 접근 => ' +rayPriceByFunction);


class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.department = "선릉지점";
    this.salesAmount = 0;
  }

  applyDiscount(discount) {  
    return this.price * discount;   
  }
  
  addSales() {
    this.salesAmount++;
  }
}

const morning = new Car('Morning', 2000000);
console.log(morning);
console.log(morning.name); 
console.log(morning.price); 

const price = morning.applyDiscount(0.8); 
console.log(price); 

console.log(morning.salesAmount); 
morning.addSales();
console.log(morning.salesAmount); 

console.log(1%2); 


function getPrefix(a) {
  const stringSlice = a.indexOf ("-")  
  if (stringSlice !== -1) {
    return a.slice(0,stringSlice);
  }
}

getPrefix('BTC-KRW');

/*
// Test - 다음 함수 안에 코드를 구현하세요
function find_longest_word() {
  let wordArray = [];
  let longWord = wordArray[i].length;
  for (let i=0; i < wordArray.length; i++) {
  }

}

console.log(find_longest_word(["PHP", "Exercises", "Backend"])) ;





document.getElementsByClassName("loginBtn").addEventListener("click", myFunction);

function myFunction() {document.getElementsByClassName("or").innerHTML = "hi";};
*/

/*
const thisIsId = document.getElementsByClassName('loginId');
const thisIsPw = document.getElementsByClassName('loginPw');
const opacityAlert = document.querySelector('.loginBtn');

thisIsPw.addEventListener('keyup', function (event) {
    if(thisIsId.value.length !== null && thisIsPw.value.length >= 6){
        event.target.value = '0.3';
        return;
    }
});
*/


/*
thisIsPw.addEventListener('keyup', function (opacityChange) {
    //const thisIsIdValue = document.getElementsByClassName('loginId').value;
    const thisIsPwValue = document.getElementsByClassName('loginPw').value;
    
    if(thisIsIdValue.length !== -1 && thisIsPwValue.length >= 6){
        opacityAlert.style.opacity = '0.3';
        return;
    }
});


const inputContainer = document.getElementsByClassName('inputBox');

inputContainer.addEventListener('keydown',function(){
    const idValue = document.getElementsByClassName('loginId').value;
    const pwValue = document.getElementsByClassName('loginPw').value;

    if (!idValue) {
        alert ('비활성화');
        return;
    }
    if (!pwValue)
    alert ('활성화');
    return;

});


const thisIsBtn = document.getElementsByClassName('loginBtn');

thisIsBtn.addEventListener('click', showText);
function showText() {
    document.getElementsByClassName("loginId").innerHTML = "aa";
};

*/

/*
문제
twoSum함수에 숫자배열과 '특정 수'를 인자로 넘기면,
더해서 '특정 수'가 나오는 index를 배열에 담아 return해 주세요.

nums: 숫자 배열
target: 두 수를 더해서 나올 수 있는 합계
return: 두 수의 index를 가진 숫자 배열
예를 들어,
nums은 [4, 9, 11, 14]
target은 13

nums[0] + nums[1] = 4 + 9 = 13 이죠?

그러면 [0, 1]이 return 되어야 합니다.

가정
target으로 보내는 합계의 조합은 배열 전체 중에 2개 밖에 없다고 가정하겠습니다.



*/
/*
var students = [80,90,100];
var sum = 0;
var avg = 0.0;

for (var i=0; i < students.length; i++ ) {
    sum += students[i];
}

console.log(sum);
avg = sum / students.length;
console.log(avg);


var arr2 = [20,77,50,40,10,55];
var min = 1200; // 최소값이 저장될 변수(단, 변수에 저장 될 값은 데이터의 가장 큰 값으로 정해야 한다.)

// min process
for(var i = 0; i < arr2.length; i++) {
    // min값이 현재값보다 크다면
    if(min > arr2[i]) {
        min = arr2[i];
    }
}

console.log(min);
*/

/*


function twosum(target) {
  let nums = [];
  for (let i = nums.length-1; i < nums.length; i--) {
    if (target === nums[i] + nums[i]+1)  {
      return nums[i];
    }
  }
  
}

twosum();

// [1,2,4,5]

function twosum(nums,target) {
  let result = nums[i] + nums[i+1];
  for (let i=0; i < nums.length; i++) {
    if (target === result) {
      
  }
  }
}
*/

/*
reverse 함수에 정수인 숫자를 인자로 받습니다.
그 숫자를 뒤집어서 return해주세요.

x: 숫자
return: 뒤집어진 숫자를 반환!

예들 들어,
x: 1234
return: 4321

x: -1234
return: -4321

x: 1230
return: 321
*/

/*
let x = 1230
let xstring = x.toString();
let stReverse = xstring.split("").reverse().join(""); 
//let result = stReverse.join("");
let hahaha = stReverse.slice(1,stReverse.length);
let result = [];

console.log(result);
*/
/*
const reverse = x => {
let xstring = x.toString();
let stReverse = xstring.split("").reverse(); 
  
  if(stReverse[0] !== -1){
    return stReverse.join("")-0;
  }  
  if (stReverse[0] === "0") {
    return stReverse.slice(1, stReverse.length).join("")-0;    
  }  
  if(stReverse[0] === "0" && stReverse.indexOf("-")) {
    return stReverse.slice(1, stReverse.length-1).join("")-0;    
  }
    if(stReverse.indexOf("-")) {
    return stReverse.slice(0, stReverse.length-1).join("")-0;    
  }
}

reverse(12340);


// if (string === )

// let ttt = vtr.join("")-0;
*/

/*
const reverse = x => {
  let arr = [];
  let vtr = arr.reverse();
  let ttt = vtr.join("")-0;
  
  for (let i = 0; i < arr.length; i++){
    if(arr[0] > 0) {
        return 
    }
    if(arr[arr.length-1] === 0){
      
    }
      
    if(arr[0] === '-'){
      
    }
      
};

reverse([1,2,3,4]);
*/

/*
const arr = ['a', 'b', 'c', 'b'];

let dupYn = false;
for(let i = 0; i < arr.length; i++) {
  const currElem = arr[i];
  
  for(let j = i+1; j < arr.length; j++) {
    if(currElem === arr[j]) {
      dupYn = true;
      break;
    }
  }
  
  if(dupYn)  {
    break;
  }
}
*/
/*

console.log("DupYn : " + dupYn);


const getLengthOfStr = str => {

}


var aStr = 'abcabcabc';
var aSplit = aStr.split('');
let aIndex = aSplit.split(aSplit[0]);

function asd() {
for (let i = 0; i < aSplit.length; i++) {
  for (let j = i+1; j < aSplit.length; j++) {

    if (aSplit.indexOf(aSplit[i]) === aSplit.indexOf(aSplit[j])) {
      return aSplit.slice(aSplit[j].length);
    }
  }
}
}

asd();
*/
/*
let str = "abcabcabc"

for (let i = str.length - (str.length-1); i < str.length; i++) {
  
}

str.length -1
/*

/*
String 형인 str 인자에서 중복되지 않은 알파벳으로 이루어진 제일 긴 단어의 길이를 반환해주세요.

str: 텍스트
return: 중복되지 않은 알파벳 길이 (숫자 반환)

예를 들어,
str = "abcabcabc"
return은 3
=> 'abc' 가 제일 길기 때문

str = "aaaaa"
return은 1
=> 'a' 가 제일 길기 때문

str = "sttrg"
return은 3
=> 'trg' 가 제일 길기 때문


var test  = 'love you. love me. love everything!'
var regExp = /love/gi;

test2 = test.match(regExp);

*/

/*
const getLengthOfStr = str => {
  let count = 0;
  
  for (i=0; i < str.length; i++) {
    let char = str.charAt(i);
    let set = new Set([char]);
    
    for (let j = i+1; j < str.length; j++) {
      let char = str.charAt(j);
      if (set.has(char)) {
        break;
      } else {
        set.add(char);
      }
      
      count = Math.max(count, set.size);
    }
  }
  
  return count;
};

let result = getLengthOfStr('aaaaaaaaaaa');
console.log (result);

let num = -1234;
let numString = num.toString();
let numSplit = numString.split('');
let numReverse = numSplit.reverse().join('')-0;

console.log(numString);

const sameReverse = num => {
  let numString = num.toString();
  let numSplit = numString.split('')
  let numNumber = numSplit.join('')-0;
  let numReverse = numSplit.reverse().join('')-0;
  

  if (num > 0 && numNumber === numReverse) {
    return true;
  } else {
    return false;
  }
}

sameReverse(-11);
*/
/*
let strs = ['start', 'stair', 'step'];

let arrStrs = strs[0];
let arrStrsSplit = strs[0].split('')[0];

for (let i = 1; i < strs.length; i++){
  for (let j = 0; j < strs.length; j++){
    if (strs[0].split('')[0] === strs[i].split('')[0] && strs[0].split[j] === strs[i].split('').[j]){
      console.log(strs[0].split('')[0] + strs[i].split('').[j]));  
  }
  
  }
}
  
const getPrefix = strs => {
  let arr = strs[i].split('')[j];
  //let arrSplit = arr.split('')[j];

  for (let i=0; i<strs.length; i++) {
    for (let j=0; j < strs.length; j++){
      if (strs[0].split('')[0] === strs[i].split('')[j]){
        return strs[i].split('')[j].join('');
      }
    }
  }
}

strs();

function isEven(num){
  for(let num = 2; num <= 50; num = num + 2) {
    console.log(num.toString());
  }
}

isEven();

function isEven(){
  for(let num = 2; num <= 50; num = num + 2) {
    console.log(num);
  }
}

isEven();
*/

/*
로마자에서 숫자로 바꾸기

1~3999 사이의 로마자 s를 인자로 주면 그에 해당하는 숫자를 반환해주세요.
로마 숫자를 숫자로 표기하면 다음과 같습니다.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

1, 1+1, 1+1+1, 5-1, 5, 5+1, 5+1+1, 5+1+1+1, 

로마자를 숫자로 읽는 방법은 로마자를 왼쪽부터 차례대로 더하면 됩니다.
III = 3
XII = 12
XXVII = 27
입니다.

그런데 4를 표현할 때는 IIII가 아니라 IV 입니다.
뒤의 숫자에서 앞의 숫자를 빼주면 됩니다.
9는 IX입니다.

I는 V와 X앞에 와서 4, 9
X는 L, C앞에 와서 40, 90
C는 D, M앞에 와서 400, 900

I = 1
II = 2
III = 3
IV = 4
V = 5
VI = 6
VII = 7
VIII = 8
IX = 9
X = 10
XI = 11
XII = 12
XIII = 13
XIV = 14
XV = 15
XVI = 16
XVII = 17
XVIII = 18
XIX = 19
XX = 20
XXI = 21
XXII = 22
XXIII = 23
XXIV = 24
XXV =25
XXVI = 26
XXVII = 27
XXVIII = 28
XXVIX = 29
XXX = 30
XXXI = 31
XXXII = 32
XXXIII = 33
XXXIV = 34
XXXV = 35
XXXVI = 36
XXXVII = 37
XXXVIII = 38
XXXVIX = 39
XXXX = 40 
XXXXI = 41 
XXXXII = 42
XXXXIII = 43
XXXXIV = 44
XXXXV = 45
XXXXVI = 46
XXXXVII = 47
XXXXVIII = 48
XXXXIX = 49
L = 50
LI = 51
LII = 52
LIII = 53
LIV = 54






function romanToNum(s) {
  let arr = {
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000
  }
}
const oneTwoThree = [1, 5, 10, 50];

result = oneTwoThree.reduce((acc, cur) => {
  if (cur) acc.push(cur);
  return acc;
}, []);
result; // [1, 3]

*/


/*

function moreThanHalf(nums) {
  let arr = nums[i]
  let cnt = 0
  
  for (let i = 0; i<nums.length; i++){
    if (count === 0 && nums[0] === nums[i]) {
      return cnt += 1
    }
  }
}

moreThanHalf(nums);
*/

/*
## 풀이
1. 카운트라는 변수를 0으로 설정하고,
2. nums의 0번째 값부터 for문을 시작하고,
3. 0번째 값을 기준으로 값이 같으면 count += 1,
  -> 0번째 말고, 0번부터 순차적으로 돌아야함
4. 순차적으로 돌다가, count += 값이 nums.length/2 보다 크면 break,
5. 그 과반수 넘은 숫자를 리턴해야함 



## 문제
숫자로 이루어진 배열인 nums를 인자로 전달합니다.
숫자중에서 과반수(majority, more than a half)가 넘은 숫자를 반환해주세요.

예를 들어,

nums = [3,2,3]
return 3

nums = [2,2,1,1,1,2,2]
return 2


## 가정
nums 배열의 길이는 무조건 2개 이상
*/
/*
let arr1 = ['(',')','[',']','{','}']
console.log(arr1[0]+arr1[1])
if (arr1[0]+arr1[1] || )

function isValid(s) {
  let arr = s.slice();
  for (i=0; i<arr.length; i++){
    
  }
  if (arr[0]+arr[1] || arr[2]+arr[3] || arr[4]+arr[5]) {
    return true;
  }
}
isValid();
*/
/*
## 문제
s는 여러 괄호들로 이루어진 String 인자입니다.
s가 유효한 표현인지 아닌지 true/false로 반환해주세요.

종류는 '(', ')', '[', ']', '{', '}' 으로 총 6개 있습니다.
아래의 경우 유효합니다.
한 번 괄호를 시작했으면, 같은 괄호로 끝내야 한다.
괄호 순서가 맞아야 한다.

예를 들어 아래와 같습니다.

s = "()"
return true

s = "()[]{}"
return true

s = "(]"
return false

s = "([)]"
return false

s = "{[]}"
return true
*/

/*
let sortResult1 = [];
for (let num in result) {
  sortResult1.push([num, result[num]]);
}
let finalResult = sortResult1.sort(function(a,b) {
  return b[1] - a[1];
});

console.log(finalResult)

let sortResult = Object.values(result).sort(function(a,b){
  return b-a;
});

console.log(sortResult)


let sortResult1 = [];
for (let num in result) {
  sortResult.push([num, result[num]]);
}
let finalResult = sortResult1.sort(function(a,b) {
  return b[1] - a[1];
});

console.log(finalResult)

// finalResult.sort() 




let result_key = Object.keys(result)[0];
let result_value = [result[Object.keys(result)[1]]];

console.log(result_key);  // '1'
console.log(result_value); // 3
*/


/*
var obj = {
    "1" : "iOS",
    "2" : "Android"
};

var first_key = Object.keys(obj)[0];
var first_value = obj[Object.keys(obj)[0]];

console.log(first_key);  // 1
console.log(first_value); // iOS


let max = arr1.reduce(function(a, b) {
    return Math.max(a, b);
})
console.log(max)

                      




## 문제

nums는 숫자로 이루어진 배열입니다. 
가장 자주 등장한 숫자를 k 개수만큼 return해주세요.

nums = [1,1,1,2,2,3],
k = 2

return [1,2]

nums = [1]
k = 1

return [1]
*/

/*
function topK(nums, k) {
  let arr = String(nums).split(',');
  let arrReduce = arr.reduce((accu, curr) => {
  accu[curr] = (accu[curr] || 0) +1;
  return accu;
  }, {})
  
  let sortArr = [];
  for (let num in arrReduce) {
  sortArr.push([num, arrReduce[num]]);
  }
  let sortArrResult = sortArr.sort(function(a,b) {
    return b[1] - a[1];
  });
  
  let result = [];
  for (let i=0; i < sortArrResult.length; i++){
    return result.push(sortArrResult[i][0]-0)
  }
  let finalResult = result.push(sortArrResult[i][0]-0)
  return finalResult.slice(0,k)
}

topK(nums, k)

let nums1 = [1,1,1,1,1,1,2,2,2,2,2,2,2,3]
let arr1 = String(nums1).split(',');

let result = arr1.reduce((accu, curr) => {
  accu[curr] = (accu[curr] || 0) +1;
  return accu;
}, {})

console.log(result)
console.log(Object.keys(result))


let sortResult1 = [];
for (let num in result) {
  sortResult1.push([num, result[num]]);
}
let finalResult = sortResult1.sort(function(a,b) {
  return b[1] - a[1];
});

console.log(finalResult)

  let asdasd = [];
for (let i=0; i < finalResult.length; i++) {

  asdasd.push(finalResult[i][0] - 0)
  console.log(asdasd)
}





let keysSorted = Object.keys(result).sort(function(a,b){
  return sortResult1[b]-sortResult1[a];
  }); //keySorted = 5,2,1


console.log(keysSorted)

*/



/*

function getMaxArea(height) {
  let maxHeight = Math.max.apply(null, height);
  for (let i = 1; i < height.length-1; i++){
    if ()
  }
  
}


const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function getMax() 
  {
    return Math.max.apply(null, height);
  }

getMax();

## 문제
인자인 height는 숫자로 이루어진 배열입니다.
그래프로 생각한다면 y축의 값이고, 높이 값을 갖고 있습니다.

아래의 그래프라면 height 배열은 [1, 8, 6, 2, 5, 4, 8, 3, 7] 입니다.

저 그래프에 물을 담는다고 생각하고, 
물을 담을 수 있는 가장 넓은 면적의 값을 반환해주세요.

## 가정
배열의 길이는 2이상입니다.

![](https://storage.googleapis.com/replit/images/1555380144403_97221ca23fbb92beaae5b6c800ceb5c8.pn)

내가 생각한 풀이
1. 만약 길이가 [0,1] 일 경우,
  삼항(배열[0]값 > 배열[1]값 ? 배열[0]값 * 배열.렝쓰-1 : 배열[1]값 * 배열.렝쓰-1

2. 이중 포문으로 i는 앞의 2분의1을 돌고, j는 뒤의 2분의 1을 돌아서
 ***반씩 돌 경우, 앞에 가장 큰 

  
let myObj = {
  property1: "hello",
  property2: [1,2,3,4,5],
  property3: {
    childproperty: "haha"
  }
};


  let name = "property1";


myObj[name] = ["hi", "hello"];


console.log(myObj);


myObj.property3.siblingproperty = [3, 6, 9];
console.log(myObj);





class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.department = "선릉지점";
  }


  applyDiscount(discount) {  
    return this.price * discount;   
  }


  changeDepartment(departmentName) {
    this.department = departmentName;
  }
}

const avd = new Car (1,2)

console.log(avd)
console.log(avd.applyDiscount(3))

class MyMath {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  getNumber(x, y) {
    return [this.x, this.y];
  }
  
  add(add) {
    add = this.x + this.y;
    return add
  }
  
  substract(sub) {
    sub = this.x-this.y;
    return sub
  }
  
  multiply(multi){
    multi = this.x * this.y;
    return multi
  }
}


const result = new MyMath (6,3);
console.log(result);
console.log(result.getNumber());
console.log(result.add());
console.log(result.substract());
console.log(result.multiply());


let difficult = {
  'my name': 'boong',
  color: 'silver',
  키: '한글인 키는 따옴표가 없어도 되는군!!',
  '!키': '느낌표 있는 키는 따옴표가 필요하군',
  $special: '$는 없어도 되는군',
  33: 31
};
let name = '키'

console.log(difficult)
console.log(difficult.$special)
console.log(difficult[33])
console.log(difficult.['my name'])
console.log(difficult[name])
difficult[name] = '값 바꾼다'
difficult.color = '색깔'

console.log('생성전: ' + difficult.new);
difficult.new = '새로추가된 프로퍼티'
console.log('생성후: ' + difficult.new);

const mutableObj = {
  name: '객체'
};


mutableObj1 = {
   name: '수정'
}
console.log(mutableObj)

mutableObj.name = '수정';
mutableObj.type = 'Object 타입';


let methodObj = {
  do: function() {
    console.log('메서드 정의는 이렇게');
  }
}
methodObj.do()

const a = '안녕';
const b = '안녕';
console.log(a === b);

const hiObj = { 
  name: '안녕' 
};
const helloObj = {
  name: '안녕'
};
console.log('객체비교 =>', hiObj === helloObj);

console.log('객체비교 =>', hiObj === helloObj);
console.log('객체값비교 =>', hiObj.name === helloObj.name);


let myProfile = {
  name: '김개발',
  address: {
    email: 'geabal@gmail.com',
    home: '위워크'
  },
  'my favorite': {
    food: [{
      name: '샐러드',
      price: 3500
    }, {
      name: '삼겹살',
      price: 15000
    }],
    hobby: ['축구']
  }
}

// getAnswer 함수를 호출하면
// '샐러드'가 return 될 수 있도록 프로퍼티에 접근해서 반환해주세요.

function getAnswer() {
  return myProfile['my favorite'].food[0].name
}

getAnswer()



//ES5
function hi(text) {
  text += '하세요';
  return text;
}



hi();

//ES6
const hi1 = text => { 
  text += '하세요';
  return text 
};

hi1()

const hi2 = name => name;

hi2(name)

// 아래에서 변환해주세요!

const welcome = name => {
 return "안녕하세요" + name 
}
welcome()

// ES6
const handleBio = (nickname, bio) =>  {
  const user = {
    nickname : nickname,
    bio : bio,
  }
   return user;
}

// 아래에서 변환해주세요!


handleBio()

function handleBio(nickname, bio) {
  const user = {
    nickname : nickname,
    bio : bio,
  }
  return user;
}

handleBio()


let detail = '자세히\n' + '보아야\n' + '이쁘다\n';
console.log(detail);

let detail1 = `자세히 
보아야
이쁘다


내코드..`;
console.log(detail1);

const email = 'yealee.kim87@gmail.com';

console.log(email.startsWith('yea'));
console.log(email.endsWith('com'));
console.log(email.includes('@gmail'));
'#'.repeat(3);
*/
// const handleEdit = (nickname, interests) => {
//   const arr = interests[i]
//     for (let i = 0; i<arr.length; i++){
//     interests.push(interests[i])
//   }
//   const result = {
//     nickname : nickname,
//     interests : interests[i],
//     bio : `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`
//   }

//   return result
// }

// handleEdit()


// const handleEdit = (nickname, interests) => {
//   const result = {
//     nickname : "뚜비",
//     interests : ["방탈출","테니스","멍 때리기"],
//   }
//   nickname = result.nickname;
//   interests = result.interests ;
//   return `제 닉네임은 ${nickname}입니다. 취미는 ${interests}입니다.`

// }

// handleEdit()

//   const result = {
//     nickname : "뚜비",
//     interests : ["방탈출","테니스","멍 때리기"],
//     bio : `제 닉네임은 nickname입니다. 취미는 interests입니다.`
//   }

//   console.log(result)


// const handleEdit = (nickname, interests) => {
//   nickname : "뚜비";
//   interests : ['방탈출', "테니스", "멍 때리기"];
// }

// handleEdit(nickname, interests)

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);
console.log (squares)



let startWithNames = [];
let names = ['a', 'ab', 'cbb', 'ada'];

names.forEach(el => {   
  if (el.startsWith('a')) {     
    return startWithNames.push(el);   
  } 
});

console.log(startWithNames)


let hasC = false;
let arr1 = ['a', 'b', 'c', 'd'];

arr1.forEach(el => {
  if (el === 'c') {
    hasC = true;
    return;
  }
});

console.log(hasC) 

let idxOfC = -1;
let arr2 = ['a', 'b', 'c', 'd'];

arr2.forEach((el, idx) => {
  if (el === 'c') {
    idxOfC = idx;
    return;
  }
});

console.log(idxOfC) // 2

// // 함수로 출력이 안돼서 실패
// const moreThan100 = nums => {
//   let newArr = [];
//   newArr.forEach(el =>{
//     if (el >= 100) {
//       return nums.push(true);
//     } else {
//       return nums.push(false);
//     }
//   })
// }

// console.log(moreThan100(nums))

// let newArr = []
// let nums = [100,9,30,7, 1000]

// nums.forEach(el => {
//   if(el >=100) {
//     return newArr.push(true)
//   } else {
//     return newArr.push(false)
//   }
// })

// console.log(newArr)


// const moreThan100 = nums => {
//   return nums.map(x => {
//     if(x >= 100) {
//       return true
//     } else {
//       return false
//     }
//   })  
// }

// console.log(moreThan100())

/*
const moreThan100 = nums => 
  nums.map(x => {
    if (x >= 100) {
      return true;
    } else {
      return false;
    }
  });
  
console.log(typeof moreThan100);
console.log(moreThan100([100, 9, 30, 7]));


const formatDate = dates => 
  dates.map(x => {
    return x.slice(0,4) + "년 " + x.slice(5,7) + "월 " + x.slice(8,10) + "일";
  })

console.log(typeof formatDate)
console.log(formatDate(['2019-03-21', '2020-01-20']))
*/


const information = {
  name: '김개발'
}

const verb = 'developes'
const project = 'facebook'

information[verb] = project // [A]
// information.developes = 'facebook' // [B]

console.log(information)
            
            
const obj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}

Object.keys(obj)

const keys = Object.keys(obj) // ['name', 'weight', 'price', 'isFresh']


for (let i = 0; i < keys.length; i++) {
  const key = keys[i] // 각각의 키
  const value = obj[key] // 각각의 키에 해당하는 각각의 값


  console.log(value)
}

const values = Object.values(obj)
// values === ['melon', 4350, 16500, true]

const entries = Object.entries(obj)

/*
entries === [
  ['name', 'melon'],
  ['weight', 4350],
  ['price', 16500],
  ['isFresh', true]
]
*/

const arr4 = ['coconut', 'banana', 'pepper', 'coriander']


for (let i = 0; i < arr4.length; i ++) {
  console.log(i)
  console.log(arr4[i])
} 

// for ->> for in 으로
for (let i in arr4) {
  console.log(i)
  console.log(arr4[i])
}


const forObj = {
  name: 'melon',
  weight: 4350,
  price: 16500,
  isFresh: true
}


for (let key in forObj) {
  const value = forObj[key]


  console.log(key)
  console.log(value)
}


// // Assignment - 다음 함수 안에 코드를 구현하세요
// const getExamResult = (scores, requiredClasses) => {
//   const result = {} 
//   const resultKeys = Object.keys(scores)
//   const scoresValues = Object.values(scores)
//   const resultValues = scoresValues.map(x => {
//     if (x === 'A+') {
//       return 4.5;
//     }
//     if (x === 'A') {
//       return 4;
//     }if (x === 'B+') {
//       return 3.5;
//     }if (x === 'B') {
//       return 3;
//     }if (x === 'C+') {
//       return 2.5;
//     }if (x === 'C') {
//       return 2;
//     }if (x === 'D+') {
//       return 1.5;
//     }if (x === 'D') {
//       return 1;
//     } else {
//       return 0
//     }
//   })
  
//   for (let i in requiredClasses) {
//     if (!resultKeys) {
//       return resultKeys.push(requiredClasses[i]) 
//     }
//   }
//   result[resultKeys] = resultValues
  
//   return result
  
// }


/*
1. 스코어의 키를 배열로 변경
2. 스코어의 값을 배열로 변경
3. 스코어의 값을 숫자로 변경 (인덱스오브)
4. 리절트 안에 넣기
*/



/*
const scores = {
  '생활속의회계': 'C',
  '논리적글쓰기': 'B',
  '독일문화의이해': 'B+',
  '기초수학': 'D+',
  '영어회화': 'C+',
  '인지발달심리학': 'A+',
}
const requiredClasses = ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론']



  const result = {} 
  const resultKeys = Object.keys(scores)
  const scoresValues = Object.values(scores)
  const resultValues = scoresValues.map(x => {
    if (x === 'A+') {
      return 4.5;
    }
    if (x === 'A') {
      return 4;
    }if (x === 'B+') {
      return 3.5;
    }if (x === 'B') {
      return 3;
    }if (x === 'C+') {
      return 2.5;
    }if (x === 'C') {
      return 2;
    }if (x === 'D+') {
      return 1.5;
    }if (x === 'D') {
      return 1;
    } else {
      return 0
    }
  })
  
  for (let i in requiredClasses) {
    if (!resultKeys) {
    resultKeys.push(requiredClasses[i]) 
    }
  }
  result[resultKeys] = resultValues
  
console.log(result)
console.log(resultKeys)
*/

//인자 값 넣어주기
const scores = {
  '생활속의회계': 'C',
  '논리적글쓰기': 'B',
  '독일문화의이해': 'B+',
  '기초수학': 'D+',
  '영어회화': 'C+',
  '인지발달심리학': 'A+',
}
  
const requiredClasses = ['영어회화', '기초수학', '공학수학', '컴퓨터과학개론', 'ㅁㄴㅇ'];


const getExamResult = (scores, requiredClasses) => {
  //const results = {}; 

  
   for(let i in requiredClasses) {
    const name = requiredClasses[i];
    console.log(name);
    const score = scores[name];
    console.log('발류 >>>',score);
    if(!score) {
      scores[name] = 0;
    }
  }

  for (let key in scores) {
    const value = scores[key]
    if (value === 'A+'){
      scores[key] = 4.5
    }
    if (value === 'A'){
      scores[key] = 4
    }
    if (value === 'B+'){
      scores[key] = 3.5
    }
    if (value === 'B'){
      scores[key] = 3
    }
    if (value === 'C+'){
      scores[key] = 2.5
    }
    if (value === 'C'){
      scores[key] = 2
    }
    if (value === 'D+'){
      scores[key] = 1.5
    }
    if (value === 'D'){
      scores[key] = 1
    }
    if (value === 'F'){
      scores[key] = 0
    }
  }
    return scores;
}

getExamResult(scores, requiredClasses); 
  //함수 호출하기


/*
const reverseString = s => {
    for (let i = 0; i < s.length/2; i++) {
        let reverseS = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = reverseS;
    }  

    return s;
};

*/
/*
const reverseString = s => {
  // for (let i = s.length-1; i < s.length; i--){
  //   return s.push(s[i])
  // }
  const revS = s.map(x => {
    for (let i = s.length-1; i < s.length; i--){
      return x = s[i]
    }
  })
  return revS
};

console.log(reverseString(["h","e","l","l","o"]))
*/
// s(["h","e","l","l","o"]);

const s = ["h","e","l","l","o"]
// const revS = s.map(x => {
//     for (let i = x.length-1; i < x.length; i--){
//       if (x === x.length-1) {
//         x = x[i]
//       } else {
//         x = x
//       }
//     }
//   })

const revS = x => {
  for (let i = s.length-1; i < s.length; i--){
    return s.map(a=>{a = a[i]})
  }
}

console.log(revS())


const arr0 = [0,1,0,3,12];

console.log(arr0.includes(0))

for(let i=0; i < arr0.length; i++){
  // if (arr0.includes(0)){
  //   arr0.push(arr0.indexOf(0))
  // }
}


// for (let arr0.indexOf(0) in)

// const nums = [0,1,0,3,12]
// const moveZeroes = nums => {
//   for (let i = nums.length-1; i > -1; i--){
//     if(nums[i] === 0) {
//       nums.push(nums[i]);
//       nums.splice(i,1)
//     }  
//   }
//   return nums
// }

// console.log(moveZeroes(nums))

// let a = [1, 3, 5, 7, 9]
// const index = 0
// console.log(a.reduce((a, e, i) => {
//   if(i < index) {
//     a.push(e)
//   } else if(i > index) {
//     a.push(--e)
//   }
//   return a
// }, []))

/*
### 문제
주어진 숫자 배열에서, 0을 배열의 마지막쪽으로 이동시켜주세요.
원래 있던 숫자의 순서는 바꾸지 말아주세요.

(새로운 배열을 생성해서는 안 됩니다.)

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```
*/


          /* 
          
          
          <ul className="storeCategoryTab">
            {this.state.menuData.map((newData) => {
              console.log("newData.menuName >>>", newData.menuName);
              console.log("this.state.hoverValue >>>", this.state.hoverValue);
              console.log(
                "조건 값 : this.state.hoverValue === newData.menuName >>>",
                this.state.hoverValue === newData.menuName
              );
              return (
                <>
                  <li
                    key={newData.id}
                    onMouseEnter={this.handleMenuTabMouseHover}
                    onClick={() => console.log("key", newData.id)}
                    // onMouseLeave={this.handleMenuTabMouseHover}
                  >
                    {newData.menuName}
                  </li>
                  {/* {newData.id === this.state.currentId + 1 && <div>asd</div>}
                         {() =>
                    this.state.hoverValue === newData.menuName ? (
                      <div key={newData.id} className="aaa">
//                         {newData.menuDetailName}
//                       </div>
//                     ) : (
//                       <p>ddffff</p>
//                     )
//                   } 

//            <div className="bbb">bbb</div>
//                            </>
//               );
//             })}
//           </ul>

          
//           () =>
//                       console.log("currentId", this.clickHandler(idx + 1))

//           <ul className="storeCategoryTab">
//             {this.state.menuData.map((newData) => {
//               // console.log("ddd", newData.menuDetailName);
//               return (
//                 <div className="test">
//                   <li
//                     key={newData.id}
//                     onMouseEnter={this.handleMenuTabMouseHover}
//                     // onMouseLeave={this.handleMenuTabMouseHover}
//                   >
//                     {newData.menuName}
//                   </li>
//                   {this.state.isMenuTabHover && (
//                     <section
//                       className="unisexMenuTab"
//                       onMouseLeave={this.handleMenuTabMouseHover}
//                     >
//                       {newData.menuDetailName && (
//                         <div className="menuWrapper">
//                           {newData.menuDetailName.map((subCategory) => {
//                             return <span>{subCategory}</span>;
//                           })}
//                         </div>
//                       )}
//                     </section>
//                   )}
//                 </div>
//               );
//             })}
//           </ul> */


// const price = [ {
//               "sizeId" : 1,
//               "size" : 1,
//               "lowestAsk" : 130
//             },
//             {
//               "sizeId" : 2,
//               "size" : 1.5,
//               "lowestAsk" : 222
//             },
//             {
//               "sizeId" : 3,
//               "size" : 2,
//               "lowestAsk" : 22
//             },
//             {
//               "sizeId" : 4,
//               "size" : 2.5,
//               "lowestAsk" : 2632
//             },
//             {
//               "sizeId" : 5,
//               "size" : 3,
//               "lowestAsk" : 1234
//             },
//             {
//               "sizeId" : 6,
//               "size" : 3.5,
//               "lowestAsk" : 888
//             },
//             {
//               "sizeId" : 7,
//               "size" : 4,
//               "lowestAsk" : 3
//             }]

// // const price = [1,2,3,4,5]

// const max = Math.max.apply(null,price)
// // console.log(price.lowestAsk)

// // for (let i=0; i<price.length; i++) {
// //   // const sss = Math.max.apply(null,price[i].lowestASk);
// //   // console.log(price[i].lowestAsk)
// //  Math.max(...price[i].lowestAsk)
// // }

// // var max1 = Math.max(...price);
// // console.log(max1)

// // var max2 = price.reduce(function(a, b) {
// //     return Math.max(a, b);
// // });

// Math.max([price.lowestAsk])

// console.log(price.lowestAsk)

// // price.length-1


// const productInfo = [
//         {
//           "productId" : 1,
//           "productName" : "name",
//           "productImage" : "sampleImg",
//           "price" : [
//             {
//               "sizeId" : 1,
//               "size" : 1,
//               "lowestAsk" : 130
//             },
//             {
//               "sizeId" : 2,
//               "size" : 1.5,
//               "lowestAsk" : 222
//             },
//             {
//               "sizeId" : 3,
//               "size" : 2,
//               "lowestAsk" : 22
//             },
//             {
//               "sizeId" : 4,
//               "size" : 2.5,
//               "lowestAsk" : 2632
//             },
//             {
//               "sizeId" : 5,
//               "size" : 3,
//               "lowestAsk" : 1234
//             },
//             {
//               "sizeId" : 6,
//               "size" : 3.5,
//               "lowestAsk" : 888
//             },
//             {
//               "sizeId" : 7,
//               "size" : 4,
//               "lowestAsk" : 3
//             }
//           ]
//         }]

// const Num =() => {
//   productInfo.map((sss) => 
//   sss.price
// )}

// console.log(productInfo)

// const data = {"productInfo" : [
//         {
//           "productId" : 1,
//           "productName" : "air-jordan-1-mid-chicago-toe",
//           "productImage" : "",
//           "price" : [
//             {
//               "sizeId" : 1,
//               "size" : 1,
//               "lowestAsk" : 130
//             },
//             {
//               "sizeId" : 2,
//               "size" : 1.5,
//               "lowestAsk" : 222
//             },
//             {
//               "sizeId" : 3,
//               "size" : 2,
//               "lowestAsk" : 22
//             }
//           ]
//         }
//       ]
// }
// data
// console.log("-----")
// price = data.productInfo.map(item=>item.price)
// priceArr = price[0].map(el=>el.lowestAsk)
// sortedArr = priceArr.sort(function(a,b){return a-b})
// sortedArr[0]


// const CategoriesData = {

//   sizeCategories: {
//     categoryId: 2,
//     categoryName: "SIZES",
//     sizeDetail: [
//       {
//         size: 1,
//         sizeName: "1",
//       },
//       {
//         size: 2,
//         sizeName: "1.5",
//       },
//       {
//         size: 3,
//         sizeName: "2",
//       },
//       {
//         size: 4,
//         sizeName: "2.5",
//       },
//             {
//         size: 5,
//         sizeName: "3",
//       }
//     ]
//   }
// }

//   const forTest = (e) => {
//     const sizeArr = CategoriesData.sizeCategories.sizeDetail;
//     console.log(sizeArr)
    
//     for (let i = 0; i < sizeArr.length; i++) {
//     console.log(sizeArr[i].sizeName);
//       if (sizeArr[i].sizeName === e) {
//         console.log(sizeArr[i].sizeName)
//         return sizeArr[i].size
//       }
//     }
//   };

// console.log(forTest('1.5'))

// // const countdown = n => {
// //   console.log(n);
  
  
// //   if (n === 0) return
// //   countdown(n-1)
// // }

// // countdown(10)

// const factorial = n => {
//   console.log(n)
//   if (n === 1) return 1;
//   return n * factorial(n-1)
// }

// factorial(10)

//    var number = 12975000;
//     var money = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// console.log(money)

// function fizzBuzz(n) {
//     // Write your code here
//   let arr = []
//   for (let i = 0; i < n.length; i++) {
//     if (n % 3 === 0) {
//       return 'Fizz'
//     }
//   }
// }

// fizzBuzz(9)

// const factorial = n => {
//   console.log(n)
//   if (n===1) return 1;
//   n = n * factorial(n-1)
//   return n
// }

// factorial(4)

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
   }

  return result;
}

factorial(2)


const vowels = 'javascriptloops'
const asdasd = vowels.split()
console.log(asdasd)

for (let i = 0; i < vowels.length; i++) {
  const aaaa = vowels.charAt(i)
  console.log(aaaa)
  
}

// const com = 'computerprograming'
// const findText = 'r'
// let count = 0;
// for (let i=0; i < com.length; i++) {
//   const search = com.indexOf(findText, count++)
//   if (search !== -1) {
//   count++;
//   console.log('i>>',i)
//   console.log('search>>',search)
//     console.log('count>>',count)
    
//   }
  
// }
// console.log(search)

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