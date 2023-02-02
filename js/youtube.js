 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 //함수 이름은 우리가 외부에서 가져온 유튜브를 제어해주는 자바스크립트 라이브러리가 자체적으로 함수의 이름을 찾는 것이기 때문에 함수이름 바꿀 수 없음
 function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
   new YT.Player('player', {
    // 최초 재생할 유튜브 영상 ID
     videoId: 'An6LvWQuj_8',
    //  영상을 재생하기 위한 여러가지 변수들
     playerVars: {
      autoplay: true, //자동 재생 유무
      loop: true,  //반복 재생 유무
      playlist: 'An6LvWQuj_8'  //반복 재생할 유튜브 영상 ID 목록
     },
     events: {
      onReady: function (event) {
        event.target.mute() //음소거
      }
     }
   });
 }