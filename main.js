// Functionize Minecraft Fishing Start Code
let numcod = 0;
let numsalmon = 0;
let numtropical = 0;
let numpuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  let randnum = Math.random();
  if (randnum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numcod++;
    document.getElementById("num-cod").innerHTML = numcod;
  } else if (randnum < 0.9) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numsalmon++;
    document.getElementById("num-salmon").innerHTML = numsalmon;
  } else if (randnum < 0.95) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numtropical++;
    document.getElementById("num-tropical").innerHTML = numtropical;
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numpuffer++;
    document.getElementById("num-puffer").innerHTML = numpuffer;
  }
}
