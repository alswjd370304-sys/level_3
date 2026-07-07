/* var.js */
// 한줄 주석
/* 여러 줄 주석 */
//변수와 함수
// 변수키워드 변수명 대입연산자 대입값;
// 함수생성키워드 함수명(){실행결과;}

let user_name = '홍길동'; // 변수를 사용하는 이유: 데이터를 저장하기 위해서 사용함. (정보를 저장하는 저장소)
let user_pw = '1234';
function func1(){ //생성(딱 한 번)과 준비 // 함수는 어떤 웹과 앱에서 반복하여 실행하는 것
    console.log(user_name);
    console.log(user_pw);
} // 함수 준비 끝 위치
func1(); // 함수호출


//목표) 원하는 영화명(토이스토리)을 검색하고 검색하기 버튼을 누르면(이벤트) 영화명, 개봉일이 콘솔에 출력(함수)
// 변수
const movie_name = '토이스토리';
const movie_date = '26.07.07';
// 반복실행 함수
function movie_search(){
    console.log(movie_name);
    console.log(movie_date);
}

//목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북 15인치 정보가 콘솔에 출력
const notebook_name = '삼성노트북';
const notebook_size = '15인치';
function notebook_search() {
    console.log(notebook_name);
    console.log(notebook_size);
}

//목표) 여행검색하기를 클릭 시 여행지/가격/특산물 정보 콘솔 출력
//강릉/20만뭔/감자빵
const trip_name = '경주';
let trip_price = '20만원';
let trip_food = '십원빵';
function trip_search(){
    console.log(trip_name);
    console.log(trip_price);
    console.log(trip_food);
}
