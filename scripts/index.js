// 자바스크립트
// 자바스크립트는 반드시 변수(객체)부터 준비해야한다!
// 변수 종류: var, let, const
// 변수작성문법: 변수종류 변수명 대입연산자 대입값; (원래는 통채로 객체)
// 기초 - 상황 연습
// 1. 김치 반찬통 준비
let bowl; // 빈 변수(저장소)
// 2. 김치 담기
bowl = '김치'; //김치라는 데이터(객체)가 담긴 변수
bowl = '사과'; //김치(자동 제거), 사과(새로운 객체)
// 1. 고기 담을 반찬통 준비
let bowl2;
// 2. 고기 담기
bowl2 = '고기';
// 객체, 함수 작성법
// 자바스크립트의 작성규칙은 대부분 객체로 시작한다.
// 객체.속성
// 객체.함수()
// 객체란? 사용자(개발자)가 제어하고 싶은 대상
console.log(bowl); //디버깅 용도(오류 및 수정 용도)
console.log('bowl변수의 저장된 데이터는',bowl);
console.log('bowl변수 :',bowl);
console.log('bowl변수=>',bowl);
console.log('bowl변수의 데이터 ->',bowl);
// ''에 묶은 데이터는 단순 문자데이터
// ''에 묶지 않은 데이터는 동적인 객체 또는 변수
console.log('1+1');
console.log(1+1);
console.log('1+1=',1+1);
console.log('--------------------------------------------');


let user_name; // uear_name 빈변수 생성
let user_age;
user_name = '이영희'; //user_name에 문자값을 대입 (데이터 값)
// name은 자바스크립트 예약어라 변수명으로 사용불가
user_name = '이영이'; //기존이름은제거, 새로운 대입
console.log(user_name);


user_age = 20; // 숫자로 인식하기 위해 따옴표x
console.log('20'+1); //201
console.log(20+1); //21
// 올해 나이는 20, 내년 나이는 21
// 변수로 저장한 데이터는 출력 시 변수로 사용
console.log('올해 나이는',user_age,'내년 나이는', user_age+1);
user_age = 21; //기존 20 버리고 21대입
console.log('올해 나이는',user_age,'내년 나이는', user_age+1);


// const는 생성과 대압이 반드시 동시에 이루어져야함.
const user_number = '123456-78901234';
// user_number = '123456-1234567'; -> 변경 시도 오류
console.log(user_number);