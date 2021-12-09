var min = prompt("Enter your Min");
var sec = prompt("Enter your Sec");
var mili = prompt("Enter your Milisec");

var min_head = document.getElementById("min");
var sec_head = document.getElementById("sec");
var mili_head = document.getElementById("mili");
var interval;
if (min > 9) {
  min_head.innerHTML = min;
}
else if(min == ''){
  min_head.innerHTML = "00";
}
else {
  min_head.innerHTML = "0" + min;
}
if (sec > 9) {
  sec_head.innerHTML = min;
}
else if(sec == ''){
  sec_head.innerHTML = "00";
}
else {
  sec_head.innerHTML = "0" + sec;
}
if (mili > 9) {
  mili_head.innerHTML = mili;
}
else if(mili == ''){
  mili_head.innerHTML = "00";
}
else {
  mili_head.innerHTML = "0" + mili;
}

function timeout() {
  mili--;
  mili_head.innerHTML = mili;
  if (min == 0 && sec == 0) {
    pause();
    mili = 0;
    mili_head.innerHTML = "0" + mili;
  }
  else if (mili == 0) {
    sec--;
    if (sec > 9) {
      sec_head.innerHTML = sec;
    }
    else {
      sec_head.innerHTML = "0" + sec;
    }
    mili = 100;
  }
  else if (sec == 0) {
    min--;
    if (min > 9) {
      min_head.innerHTML = min;
    }
    else {
      min_head.innerHTML = "0" + min;
    }
    sec = 60;
  }
}

function start() {
  interval = setInterval(timeout, 10);
  document.getElementById("startbtn").className = "disable";
}
function pause() {
  clearInterval(interval)
  document.getElementById("startbtn").className = "visible";
}
function reset() {
  min = 0;
  sec = 0;
  mili = 0;
  min_head.innerHTML = min + "0";
  sec_head.innerHTML = sec + "0";
  mili_head.innerHTML = mili + "0";
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
