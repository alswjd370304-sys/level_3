//js
// item에 마우스를 올리면 img 태그 경로가 다른 이미로 변경
const item1 = document.querySelector('.item');
const item1Img = document.querySelector('.item img');
console.log(item1, item1Img);
/* 이벤트 */
item1.addEventListener('mouseover', itemImgSrc);
item1.addEventListener('mouseout', img1Img);
/* 함수 */
function itemImgSrc() {
    item1Img.src = 'https://somako.co.kr/wp-content/uploads/2025/08/%EA%B9%80%ED%96%84%EC%B0%8C%EC%95%84%EB%B0%94%ED%83%80%EC%83%90%EB%9F%AC%EB%94%94001-819x1024.webp';
}
function img1Img() {
    item1Img.src = 'https://www.news1.kr/_next/image?url=https%3A%2F%2Fi3n.news1.kr%2Fsystem%2Fphotos%2F2025%2F10%2F1%2F7525465%2Fhigh.jpg&w=1920&q=75';
}

/* ----------------------------------------------할인상품 */
const sale1 = document.querySelector ('.sale');
const photoImg = document.querySelector ('.sale .photo img');
console.log(sale1, photoImg);

/* 이벤트 */
sale1.addEventListener ('mouseover', saleImgsrc);
/* 함수 */
function saleImgsrc() {
    photoImg.src = 'https://image.msscdn.net/thumbnails/images/prd_img/20260413/6301940/detail_6301940_17800357066224_big.jpg?w=1200';
}