const button = document.getElementById("myButton");
const newBlock = document.getElementById("newBlock");
const title = document.getElementById("title");
const forCandidate = document.getElementById("forCandidate");

button.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Добавляет плавность прокрутки
  });

  button.style.display = "none";
  newBlock.style.display = "block";
  forCandidate.style.display = "block";
  title.style.display = "none";
});