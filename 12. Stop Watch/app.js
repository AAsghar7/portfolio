var min = 0;
var sec = 0;
var mili = 0;

var min_head = document.getElementById("min");
var sec_head = document.getElementById("sec");
var mili_head = document.getElementById("mili");
var interval;

function timeout() {
  mili++;
  mili_head.innerHTML = mili;
  if (mili >= 100) {
    sec++;
    sec_head.innerHTML = sec;
    mili = 0;
  }
  else if (sec >= 60){
    min++;
    min_head.innerHTML = min;
    sec = 0;
  }
}

function start() {
  interval = setInterval(timeout, 10);
document.getElementById("startbtn").className="disable";
}
function pause() {
  clearInterval(interval)
document.getElementById("startbtn").className="visible";
}
function reset(){
  min = 0;
  sec = 0;
  mili = 0;
  min_head.innerHTML=min;
  sec_head.innerHTML=sec;
  mili_head.innerHTML=mili;
  pause();
}
// var timeID = setTimeout(function(){console.log("hello")}, 100);
// console.log(timeID);
// // function stopcounter(){
// //   clearTimeout(timeID);
// // }

// function start(){
//     mili++;
//     document.getElementById("mili")=mili;
// }
