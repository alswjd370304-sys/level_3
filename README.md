# 자바스크립트&제이쿼리
## 프로젝트 시작 시 항상 준비해야하는 파일, 폴더 순서
1. 프로젝트 폴더 영문으로 의미있게 작성하기
2. index.html README.md 생성
3. `styles` `scripts`, `images` 폴더 생성
4. `style/reset.css`, `style/index.css` 파일 생성
5. `scripts/index.js` 생성
## 자바스크립트
### 객체, 속성, 이벤트, 함수
* 객체 : 웹앱에서 사용하는 실제대상(버튼, 링크, 이미지 등), 보통 변수로 데이터(객체)를 저장해서 사용
* 이벤트 : 웹앱을 이용하는 사용자의 행동(클릭,터치, 드래그 등)
    * `<button onclick="클릭 시 실행되는 함수">`
* 함수 : 2번 이상 반복되는 실행내용 
    * 함수 생성과 호출을 각각 다르게 구분함.
    * 함수 생성 : `function 함수명(){함수 호출 시 반복실행할 내용;}` 생성만으론 절대 결과가 실행되지 않음. 반드시 호출을 별도로 진행.
    * 함수 호출: 위 함수 생성 바깥쪽에 `함수명()` 작성
이벤트와 함께 사용되기도 함 `onclick="함수명()"`
### 변수(데이터를 저장하는 저장소)
* 변수키워드 변수명 대입 연산자 대입값
* `let user_name ='홍길동';`
//uesr_nam이란 변수를 생성해서 / '홍길동'이란 데이터를 대입한다.
1. `var`: 오래된 선언방식, 이름 중복 가능
2. `let`: 이름 중복 불가능, 재사용(수정) 가능
3. `const`: 이름중복 불가능, 재사용(수정) 불가
### 객체, 속성, 함수 작성 문법
* 태그 예) `<a href="./index.html"></a>`
* 태그 예) `<video src="./cat.mp4" autoplay>`
* `객체.속성;`
    * 객체의 속성 읽기
    * `a.href;`
    *  `video.src;`
    *  `video.autoplay;`
    * `span.textContent;` //span태그 안 내용을 읽는다 <span>내용</span>
    * `input.value;` //value는 input전용으로 속성으로 다른 태그에 사용불가
* `객체.속성 = '값';`
    * 객체의 속성 값을 대입한다
    * 대입시 기존값이 있으면 기존값은 자동 제거되고 새로운 값이 대입
    * `a.href = './reset.css';`
    * `video.src = './dog.mp4';`
    * `video.autopaly = 0;`<!-- 0: 자동재생을 하지 않는다 -->
    * `<span>0</span>` //span의 내용 0을 -> 1로 변경
        * `span.textConetent = 1;` // 값 1을 span의 기존값을 제거하고 대입한다.
        * `span.textConetent = span.textConetent+1` ; // span이 가지는 기존값에 1을 더하여 대입한다.
    * `<input type="text value="1"` // input의 내용을 1-> 2로 변경
        * `input.value = 2;` // 값 2를 input이 가지는 속성 value에 대입한다.
        * `input.value = input.value +2;` // input의 value 속성이 가지는 기존값에 2를 더하여 대입한다.
* `객체.함수();`
    * 객체를 실행한다
    * `객체.함수() = '값';` (x)
* `이벤트=함수();`
    * 이벤트 동작 시 특정 함수를 실행한다.
    * `<태그 onclick="func();">` //함수호출
    * 위 작성 전 준비사항: `function func(){반복실행명령}` //함수생성
## DOM (document object model)
### JS에서 제어하고 싶은 html요소가 있을 경우
1. 제어하고 싶은 html 수와 클래스 id등 확인
2. 용도에 맞게 변수명 생성 `const 변수명`
3. 2번 변수에 대입연사자로 객체 대입하기
    * `document.querySelector('대상')`
4. 안전한 작업을 위해 콘솔로 변수 체크하기
    * `consloe.log(검사하고 싶은 변수명)`
    * 콘솔 결과 화면에서 `null` 또는 오류가 없는지 확인
    * `null`이 뜬다면 html script 작성위치로 가서 defer 속성 추가
        * `<script src ="경로" defer></scrip>`
## 실제 요소 크기와 관계 없는 다양한 디자인 포인트 만드는 방법
### css의 가상 선택자(실제 태그 없이 가상의 요소를 만든다)
### after, before
* `선택자::after`
* `선택자::before`
* 가상선택자의 필수속성: `content`, `display` `width` `hieght` `postion`
### 작성예시
`선택자::after {`
    `width:; height:;`
    `content:''; diaplay:block;`
    `position:absolute left right top bottom`
`}`
* after,before가 적용된 부모 선택자에 `position:relative 기준잡기`
# form 태그 관련 요약 정리
## form action,method
* (특정 주제로 묶여있는) 서버에 사용자가 제출한 것을 전송하기 위해 묶는 태그 
* action은 사용자 데이터를 보낼 서버의 주소를 입력하는 곳
* method는 데이터를 서버로 전송할 때의 방식
    * post: 데이터를 노출 시키지 않고 숨기는 방식
    * get: 데이터를 http에 노출시키는 방식
## input와type
* input은 사용자가 실제 값을 쓰거나 선택하여 제출하는 입력창을 말함
* type의 경우 **작성 종류에 따라** 달라지는 입력창의 종류를 의미
## name
* name은 서버로 데이터를 전송할 때(action으로 지정된 사이트 서버에) 입력된 데이터를 구분하기 위해 붙여주는 이름
* 선택양식에서는 name의 의미를 그룹명으로 사용함.
## value
* velue의 경우 실제 사용자가 작성하는 값을 의미함. (처음부터 입력된 값)
* 선택양식에서는 name처럼 데이터 구분 명칭으로 사용.
## id,class
* id와 class는 개발자가 태그를 작성할 때 구분하기 위해 부여함. id는 중복되지 않고 단 한 번 사용되는 경우에 이용하고 class는 중복되는 이름이 여러 개일 수 있음. 단 input과 button의 경우 id를 사용함. (예를들어, 아이디를 입력하고 보내는 버튼이 하나이기 때문임.)
* js와css에서 구분하기 위한 디자인 또는 동적 프로그래밍 용도 이름.