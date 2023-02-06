const badgeEl =document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// window는 결국 우리가 보고잇는 화면자체, 설치한 lodash라이브러리를 통해 해당 명령어 사용
// 300은 0.3초 의미-> 0.3초의 부하를 주어서 함수가 동시에 실행되는 것을 방지
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘으면.
    // gsap(요소, 지속시간, 옵션)
    if (window.scrollY > 500) {
      // Badge 요소 숨기기!
      gsap.to(badgeEl, .6, {
        opacity: 0,
        display: 'none'
      })
      //버튼 보이기
      gsap.to(toTopEl, .2, {
        x: 0
      });
    } 
    else {
      // Badge 요소 보이기!
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      })
      // 상단으로 스크롤 버튼 숨기기!
      gsap.to(toTopEl, .2, {
        x: 100
      });

    }
  }, 300))

  toTopEl.addEventListener('click',function() {
    // 0.7초동안 윈도우의 0지점으로 옮겨주겠다는 함수
    gsap.to(window, .7, {
      scrollTo: 0
    });
  })


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        // 처음 fade-in이란 이름을 가진 요소는 0.7초 후에 애니메이션 동작, 두번째 요소는 1.4초 뒤에..
        delay: (index + 1) * .7,
        opacity: 1
    });
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  // 반복 재생
  loop: true
});

new Swiper('.promotion .swiper', {
  // 기본값이라 추가x
  // direction: 'horizontal',
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10,  //슬라이드 사이의 여백
  centeredSlides: true,  //1번 슬라이드가 가운데에 보이기
  loop: true,
    // 5초에 한번씩 자동 슬라이드
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자
    clickable: true  //클릭 가능한지, 번호 요소 제어가능한지
    },
    navigation: {
      prevEl: '.promotion .swiper-prev',
      nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// promotion 클래스가 현재 잘 보이기때문에 false
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  // 현재값과 반대값으로 설정
  isHidePromotion =! isHidePromotion
  if(isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide');
  }
  else {
    // 보임처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
//   gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, 
    random(1.5, 2.5), {
      y: size, //y축 의미
      repeat: -1, //무한반복
      yoyo: true, //한번 재생된 애니메이션을 다시 되감기
      ease: Power1.easeInOut,  //애니메이션을 조금 더 자연스럽게
      delay: random(0,delay)   //1초동안 기다렸다가 애니메이션 실행
    }
  );
 }
 floatingObject('.floating1', 1, 15);
 floatingObject('.floating2', .5, 15);
 floatingObject('.floating3', 1.5, 20);

 const spyEls = document.querySelectorAll('section.scroll-spy')
 spyEls.forEach(function (spyEl) {
  // scene은 ScrollMagic이라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정
  // setClassToggle는 class를 넣었다뺏다 제어해주는 역할
  //addTo는 ScrollMagin이라는 라이브러리가 필요한 컨트롤러의 개념의 내용을 추가
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})