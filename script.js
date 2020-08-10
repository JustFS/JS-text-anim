const target = document.getElementById("target");
let array = ["simple", "clear", "smart", "strong"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");

  letter.classList.add("letter");
  letter.style.opacity = '0';
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][letterIndex];
  console.log(letter.textContent);

  target.appendChild(letter);

  setTimeout(() => {
    letter.remove();
  }, 2300);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
      
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
      
    } else {
      letterIndex = 0;
      wordIndex++;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 80);
}

loop();