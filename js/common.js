const searchEl = document.querySelector('.search');
// document대신 SearchEl 작성
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    // search요소를 클릭하면 SearchInput 요소에 포커스
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    // searchInput요소에 focus가 되면 searchEl요소에 focused를 추가
    searchEl.classList.add('focused');
    // searchInput요소를 클릭하면 html요소를 추가하는 기능/문구나타나게함
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 포커스가 해제됐을 때를 의미
searchInputEl.addEventListener('blur', function () {
    // searchInput요소에 focus 제거
    searchEl.classList.remove('focused');
    // searchInput요소를 클릭하면 html요소를 추가하는 기능/문구삭제
    searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
// textContent는 그 요소가 가지고있는 글자내요을 알아내거나 지정하는 용도
thisYear.textContent = new Date().getFullYear();