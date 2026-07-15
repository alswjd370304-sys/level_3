//var2.js
let box1; //빈 변수
let box2;
let box3;
let box4;
//변수키워드 변수명;
//(위) 변수만 생성하면 값은 기본적으로 비어있음
console.log(box1,box2,box3,box4);
//객체.함수(실행할 데이터들);
//(위) 출력한 결과 undefined

box1 = 10;  
console.log(box1,box2,box3,box4);
//함수 실행 위치에 따라 결과가 다를 수 있음.

box4 = 40;
console.log(box1,box2,box3,box4);

box2 = box1+box4;
/* 우-> 좌 */
/* 1변수과4변수를 더해서 2에 대입해라 */
console.log(box1,box2,box3,box4);

box3 = '자바스크립트'; //숫자가 아닌 문자는 따옴표 필수!
box4 = box2+box3; //box4에 새로운 값(box2+box3)이 대입되면서 기본값(40)은 자동제거
console.log(box1,box2,box3,box4);
console.log('---------------------------------------------------------');

let trash1 = '사과'; //음식물
let trash2 = '종이'; //재활용
let trash3; //?정의안된 상태
console.log(trash1,trash2,trash3);

trash3 = 1;
trash2 = trash2+trash3;
console.log(trash1,trash2,trash3);

trash2 = null; //빈데이터(값)을 변수에 대입
//undefined데이터는 오류 상태로 null처럼 대입 불가 
console.log(trash1,trash2,trash3); 

let typeResult; //결과 출력 목적 변수
typeResult = typeof(trash1);
//(위 풀이) trash1변수의 데이터타입을 확인하고 typeResult변수에 대입
console.log(typeResult); //string (결과변수사용)
console.log(typeof(trash1)); //결과변수미사용

typeResult = typeof(trash3);
console.log(typeResult); //number

let num = 1;
let str = '1';
typeResult = num+str; //1+'1'
console.log(typeResult);

const item1 = '호텔수건';
let item1_num = 1;
let itme1_price = 5000;
let item1_total;

// 호텔수건 1장의 사격은 5000원 입니다.
// item1_total = item1+item1_num+itme1_price;
item1_total = item1+item1_num+'장의 가격은'+itme1_price+'원 입니다.';
//호텔수건1500원
console.log(item1_total);

//호텔수건 2장의 가격은 1000원입니다
//호텔수건11장의 가격은NaN입니다.
//NaN 숫자가 아니라 계산이 불가
//프로그래밍 중 오류 발생 시 반드시 변수부터 확인하기!
item1_total = item1+(item1_num+1)+'장의 가격은'+itme1_price*2+'원 입니다.'; //연산자로 이루어진 출력결과
console.log(item1_total);

console.log('---------------------------------------------------------');

//hmtl태그 조작 준비. input태그 변수 생성

const frm1Num = document.querySelector('#frm1 #num');
console.log(frm1Num);

//객체, 속성, 이벤트, 함수
//html을 변수로 저장했을 때 이 변수는 ? 객체
//객체를 다루는 문법 종류: 객체.속성; 객체.함수();
//객체.속성; // 객체의 속성을 읽는다
//객체.속성 = 변경값; //객체의 속성을 변경한다
// frm1Num.value = 2
//숫자 2 데이터를 frm1Num객체의 value속성으로 대입한다;
//함수 이름만 봐도 함수 목적이 구분되도록 이름 작성하기
//function 생성함수명() {실행결과}
function numValP() { //증가
    // frm1Num.value = 2;
    // frm1Num.value = frm1Num.value+1; //기존값에 1을 더해서 대입한다
    console.log(typeof(frm1Num.value));
    //frm1Num.value+1을 실행시 1+1+11 나오는 오류 원인 찾기
    //typeof(frm1Num.value) 실행 시 string 문자로 인식하는 원인 발견
    //string 문자열을 number라는 숫자로 변경해서 오류 해결할 수 있음.
    frm1Num.value = Number(frm1Num.value)+1;
    //대입연산자가 있을 때 우측부터 먼저 해석하기, 우측에 함수 괄호가 있다면 괄호부터 해석
    //frm1Num.value를 Nunmber()함수로 숫자로 변환하고 +1을 해서 대입한다.
}

//-버튼을 클릭하면 input 값이 0으로 변경되도록하기
// frm1Num.value = 0;
function numValM() { //감소
    // frm1Num.value = 0;
    frm1Num.value = frm1Num.value-1;
    //-,*,/더하기를 제외한 산술연산자는 문자데이터를 강제로 변환해서 계산
    //"1"+1 = 11 // 문자1+숫자1
    // 1+1 = 2 // 숫자+숫자
    //"1"-1 = 0 // 빼기 연산을 만나 문자가 강제로 숫자로 변환
}

//에어비앤비 게스트추가 스크립트
//동적 목표 토대로 제어하고 싶은 html들을 모두 변수로 만들기
// 총 게스트 인원 수(totalGuest), 성인 수(adultNum), 어린이 수(childNum) = hmtl 3개
const totalGuest = document.querySelector('.total_guest em'); //태그를 선언하는 것이기 떄문에 const 사용
const adultNum = document.querySelector('.audlt_num');
const childNum = document.querySelector('.child_num');
//(위) 3개의 변수는 객체
console.log(totalGuest,adultNum,childNum);
//input태그의 value 값 변경 -> input.value = 변경값;
//input 태그 외 태그의 값 변경 -> textContent 속성활용
//성인 수 변수의 값을 2로 변경
// console.log(typeof(adultNum)); //odject=객체
// adultNum.textContent = 2;
// console.log(typeof(adultNum.textContent)); 
// 함수 활용 성인, 어린이 +,- 버튼 클릭 시 성인수, 어린이 수를 증가/감소하는 함수 제작
function adultPlus() {
    adultNum.textContent = Number(adultNum.textContent)+1;
    totalFunc();
    // totalGuest.textContent = (Number(adultNum.textContent) + Number(childNum.textContent)) + '명';
    //totalGuest.textContent = // 총 게스트 수의 내용위치에 대입하겠다
    //adultNum.textContent+childNum.textContent // 성인 span+어린이 span 내용
    // 위 태그의 내용이 기본 문자로 처리함 어린이 '1' + 성인 '1' = '11' 게산오류
    // 위 문제 해결을 위해 Number()함수 사용
    //Number(adultNum.textContent) + Number(childNum.textContent) // 1+1=2
    //전체해석) 성인의 내용과 어린이 내용을 더하고 '명'을 연결해서 총 게스트내용에 대입한다.
}
function adultMinus() {
    adultNum.textContent = adultNum.textContent-1;
    // totalGuest.textContent = (Number(adultNum.textContent) + Number(childNum.textContent)) + '명';
    totalFunc();
}
function childPlus() {
    childNum.textContent = Number(childNum.textContent)+1;
    // totalGuest.textContent = (Number(adultNum.textContent) + Number(childNum.textContent)) + '명';
    totalFunc();
}
function childMinus() {
    childNum.textContent = childNum.textContent-1;
    // totalGuest.textContent = (Number(adultNum.textContent) + Number(childNum.textContent)) + '명';
    totalFunc();
}

//총 게스트 수 변경하는 반복 함수
function totalFunc() {
    totalGuest.textContent = (Number(adultNum.textContent) + Number(childNum.textContent)) + '명';
}