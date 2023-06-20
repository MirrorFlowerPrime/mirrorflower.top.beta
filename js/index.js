let ani = document.getElementById("ani");
let ani1 = document.getElementById("ani1");


// ani.onclick = function () {
//   body.classList.toggle("Song-Button");
//   if (audio.paused) {
//     audio.play();
//   }
// };

ani1.onclick = function () {
  body.classList.toggle("active1");
};

function myFunction_title() {
  let body = document.querySelector("body");
  body.setAttribute("class", "beta");
}

function myFunction() {
  let body = document.querySelector("body");
  body.setAttribute("class", "");
    if (audio.play) {
    audio.pause();
  }
}

function myFunction_beta_1() {
  let body = document.querySelector("body");
  body.setAttribute("class", "beta active1");
}
