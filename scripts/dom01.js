/* 자바스크립트 */
/* 글쓰기 CTA 버튼 클릭 시 글쓰기 팝업 실행되는 기능 */
// 1. 팝업과 배경 숨기기
// 1-1 팝업과 뒤 배경을 자바스크립트의 변수(객체)로 등록
const popup = document.querySelector('.popup');
const popup_bg = document.querySelector('.popup_bg');
// css에선 배경색으로 선택자 확인, 자바스크립트에선 콘솔로 확인
// 콘솔에 변수를 출려갷서 변수가 정상인지 확인
// null 변수에 데이터가 비어있음 (존재하지 않음)
// css의 경우 바디 이후에 읽음, 스크립트는 바디를 무시하고 먼저 읽기 때문에 defer를 추가 속성으로 넣음
console.log(popup);
console.log(popup_bg);
// 자바스크립트에서 스타일(css) 수정하기
// 스타일은 자바스크립트에서 속성
// 객체.속성 -> 스타일
// 객체.함수()
// 객체.style.css속성=값;
// popup.style.border = '1px solid red';
// popup.style.backgroundColor = 'yellow';
// popup.style.fontSize = '2em';
// popup.style.padding = '15px 20px';
popup.style.display = 'none';
popup_bg.style.display = 'none';

// 2. cta를 클릭 하면 위 1번 대상이 보이기
// 팝업 실행 목적 함수 생성
// function 함수명(){반복실행되는내용}
function popupShow() {
    popup.style.display = 'block';
    popup_bg.style.display = 'block';
}

function popupClose() {
    popup.style.display = 'none';
    popup_bg.style.display = 'none';
}
