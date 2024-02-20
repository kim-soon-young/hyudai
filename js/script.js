window.addEventListener("load", function () {
  // 헤더 >> 언어 펼침 기능
  const langWord = document.querySelector(".language-word");
  const language = document.querySelector(".language");

  langWord.addEventListener("click", function () {
    language.classList.toggle("language-box-active");
  });
});
