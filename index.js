const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colorArray = [
  "#000000",
  "#2B8EAD",
  "#333333",
  "#6F98A8",
  ,
  "#BFBFBF",
  ,
  "#2F454E",
  "#72C3DC",
];
const codeAddress = () => {
  array.map((value, index) => {
    let randomColor = Math.floor(Math.random() * colorArray.length);
    let ElementName = document.getElementById(index + 1);
    ElementName.className = `Color` + (randomColor + 1);
    ElementName.innerText = value;
  });
};
window.onload = codeAddress;

const shuffleArray = () => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  array.map((value, index) => {
    let ElementName = document.getElementById(index + 1);
    ElementName.innerText = value;
  });
};
const sortArray = () => {
  array.sort((a, b) => a - b);
  array.map((value, index) => {
    let ElementName = document.getElementById(index + 1);
    ElementName.innerText = index+1;
  });
};
