const target = document.getElementById("target");
let array = ["simple", "clear", "smart", "strong"];
let wordIndex = 0;
let currentLetter = 0;

const createLetter = () => {
  const letter = document.createElement("div");

  letter.classList.add("letter");
  letter.style.opacity = '0';
  letter.style.animation = "anim 5s ease forwards";
  letter.textContent = array[wordIndex][currentLetter];
  console.log(letter.textContent);

  target.appendChild(letter);

  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      currentLetter = 0;
        loop();
      
    } else if (currentLetter < array[wordIndex].length) {
      createLetter();
      currentLetter++;
      loop();
      
    } else {
      currentLetter = 0;
      wordIndex++;
        setTimeout(() => {
          loop();
        }, 2000);
    }
  }, 80);
}

loop();