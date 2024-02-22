window.addEventListener("load", function () {
  // 헤더 >> 언어 펼침 기능
  const langWord = document.querySelector(".language-word");
  const language = document.querySelector(".language");
  const languageli = document.querySelector(".language li");

  langWord.addEventListener("click", function () {
    language.classList.toggle("language-box-active");
  });
  // 헤더 >> 스크롤 했을 때 배경색 변경

  // scy 초기화 정의 그리고 아래 스크롤탑을 담아두기
  // scActive  50일 때 변경하려고 정의 해줌
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;

  let header = document.querySelector(".header");
  let logow = document.querySelector(".logo-w");
  let logog = document.querySelector(".logo-g");

  // 마우스를 호버했을 때
  header.addEventListener("mouseenter", () => {
    header.classList.add("header-active");
    logow.style.display = "none";
    logog.style.display = "block";
  });
  header.addEventListener("mouseleave", () => {
    header.classList.remove("header-active");
    logow.style.display = "block";
    logog.style.display = "none";
  });

  // 윈도에 스크롤할 때 기능한다.
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > scActive) {
      header.classList.add("header-active");
      logo2.style.display = "none";
      logo1.style.display = "block";
    } else {
      header.classList.remove("header-active");
      logo2.style.display = "block";
      logo1.style.display = "none";
    }
  });

  // 메뉴 기능
  let nav = document.querySelector(".nav");
  let btMenu = document.querySelector(".bt-menu");
  let navClose = document.querySelector(".nav-close");
  btMenu.addEventListener("click", () => {
    nav.classList.add("nav-active");
  });
  navClose.addEventListener("click", () => {
    nav.classList.remove("nav-active");
  });
  //nav영역에서 벗어나면 메뉴가 사라지는 기능
  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("nav-active");
  });

  // 비디오 항목 체크 (video태그 파악)
  // 모든 비디오 태그를 변수에 저장

  let videos = this.document.querySelectorAll(".swVisual video");
  // 비디오 재생시간 체크
  // 비디오 재생 시간을 보관할 배열을 생성
  let videosTimeArr = [];
  // 비디오 재생 시간을 배열에 저장하는 반복문을 작성
  for (let i = 0; i < videos.length; i++) {
    // console.log(videos[i].duration);
    // 시간을 정수로 바꿔준다.
    videosTimeArr[i] = Math.ceil(videos[i].duration);
    // console.log(videosTimeArr[0]);
  }
  // 첫번째 비디오 자동 실행
  let videoIndex = 0;
  //  videos안에 있는 videoIndex 배열을 플레이해라.
  videos[videoIndex].play();
  //visual slide
  //swiepr 슬라이드 초기화
  let swVisual = new Swiper(".swVisual", {
    loop: true,
  });
  // 슬라이드 변경 이벤트시 처리
  swVisual.on("slideChange", function () {
    // 진행중인 비디오를 멈춤
    videos[videoIndex].pause();
    // 다음 화면에 보이는 siper 슬라이드 번호
    // console.log(swVisual.realIndex);
    videoIndex = swVisual.realIndex;
    // 다음 비디오를 재생
    // 처음으로 비디오 플레이 이동
    // currentTime 속성 HtmL5 video요소에서 사용되는 속성
    // 현재 비디오 재생 위치를 나타냄

    // 이 속성을 조작하여 재생 위치를 변경
    // 다음 슬라이드로 이동할때 마다 비디오를 처음부터 재생하기 위해서
    videos[videoIndex].currentTime = 0;

    // 오류 날 때 아래를 적어줘라.
    const playPromise = videos[videoIndex].play();
    if (playPromise !== undefined) {
      playPromise.then((_) => {}).catch((error) => {});
    }
  });
  // 비디오 영상이 플레이가 끝나면
  // 다음 슬라이드로 이동
  // 늘어나는 흰색 bar 기능추가

  let bars = this.document.querySelectorAll(".bar");
  let barScalew = 0;
  // 타이머를 생성한다.
  // 비디오 타이머 초기화 및 설정
  let videoTimer;
  // 비디오 타이머를 설정하고 초기화하는 함수를 정의하고 호출
  function videoReset() {
    // 처음에는 0%로 만들려고
    barScalew = 0;
    // 최초에 bar를 초기화 한다.
    for (let i = 0; i < bars.length; i++) {
      let tag = bars[i];
      tag.style.width = `${barScalew}%`;
    }
    // 활성화 될 bar 클래스 선택
    let activeBar = bars[videoIndex];
    console.log(activeBar);
  }
});
