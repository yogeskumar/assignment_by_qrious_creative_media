setInterval(checkPaused)
let div1 = $("#div1");
div1.css("visibility", "hidden");

let div2 = $("#div2");
div2.css("visibility", "hidden");
var myvideo = document.querySelector("#myvideo")

function checkPaused() {
  if (myvideo.paused) {
    div1.css("visibility", "visible");
    div2.css("visibility", "visible");
  } if (myvideo.paused != true) {
    div1.css("visibility", "hidden");
    div2.css("visibility", "hidden");
  }
}