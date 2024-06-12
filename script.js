window.onload = function() {


    var ms = document.querySelector("#millieseconds");
    var sec = document.querySelector("#seconds");
    var min = document.querySelector("#minutes");
    var hr = document.querySelector("#hour");



var btnStart= document.querySelector("#start")
var btnStop= document.querySelector("#stop")
var btnReset= document.querySelector("#reset")


var interval;
var seconds = 0;
var millieseconds = 0;
var minutes = 0;
var hour = 0;
 
ms.innerHTML = "00";
sec.innerHTML = ":00";
min.innerHTML = ":00";
hr.innerHTML = "00";

btnStart.onclick = function() {
    clearInterval(interval);
    interval = setInterval(start, 10);
 } 

 btnStop.onclick = function() {
    clearInterval(interval);
 }

 btnReset.onclick = function() {
    clearInterval(interval);
    millieseconds = 0;
    seconds = 0;
    minutes= 0;
    hour = 0;
    ms.innerHTML = millieseconds + "0";
    sec.innerHTML = ":" + seconds + "0";
    min.innerHTML = ":" + minutes + "0";
    hr.innerHTML = hour + "0";
 } 

 function start() {
    millieseconds++; 
    
    if(millieseconds < 9){
      ms.innerHTML = "0" + millieseconds;
    }

    if (millieseconds > 9){
        ms.innerHTML = millieseconds;
        
      } 
    
    if (millieseconds > 99) {

      seconds++;
      sec.innerHTML = ":0" + seconds;
      millieseconds = 0;
      ms.innerHTML = "0" + 0;
    }

    if (seconds > 9){
        sec.innerHTML = ":" + seconds;
      } 

    if (seconds > 58) {
        minutes++;
        min.innerHTML = ":0" + minutes;
        seconds = 0;
        sec.innerHTML = ":0" + seconds;
    }
    if (minutes > 9){
        min.innerHTML = ":" + minutes;
      } 

    if (minutes > 58) {
        hour++;
        hr.innerHTML = "0" + hour;
        minutes = 0;
        min .innerHTML = ":0" + minutes;
  }
  if (hour > 9) {
    hr.innerHTML = hour;
  }

}
}

// window.onload = function() {


//     var ms = document.querySelector("#millieseconds");
//     var sec = document.querySelector("#seconds");
//     var min = document.querySelector("#minutes");
//     var hr = document.querySelector("#hour");



// var btnStart= document.querySelector("#start")
// var btnStop= document.querySelector("#stop")
// var btnReset= document.querySelector("#reset")


// var interval;
// var seconds = 0;
// var millieseconds = 0;
// var minutes = 0;
// var hour = 0;
 
// ms.innerHTML = "00";
// sec.innerHTML = ":00";
// min.innerHTML = ":00";
// hr.innerHTML = "00";

// btnStart.onclick = function() {
//     clearInterval(interval);
//     interval = setInterval(start, 10);
//  } 

//  btnStop.onclick = function() {
//     clearInterval(interval);
//  }

//  btnReset.onclick = function() {
//     clearInterval(interval);
//     millieseconds = 0;
//     seconds = 0;
//     minutes= 0;
//     hour = 0;
//     ms.innerHTML = millieseconds + "0";
//     sec.innerHTML = ":" + seconds + "0";
//     min.innerHTML = ":" + minutes + "0";
//     hr.innerHTML = hour + "0";
//  } 

//  function start() {
//     millieseconds++; 
    
//     if(millieseconds < 9){
//       ms.innerHTML = "0" + millieseconds;
//     }

//     if (millieseconds > 9){
//         ms.innerHTML = millieseconds;
        
//       } 
    
//     if (millieseconds > 99) {

//       seconds++;
//       sec.innerHTML = ":0" + seconds;
//       millieseconds = 0;
//       ms.innerHTML = "0" + 0;
//     }

//     if (seconds > 9){
//         sec.innerHTML = ":" + seconds;
//       } 

//     if (seconds > 58) {
//         minutes++;
//         min.innerHTML = ":0" + minutes;
//         seconds = 0;
//         sec.innerHTML = ":0" + seconds;
//     }
//     if (minutes > 9){
//         min.innerHTML = ":" + minutes;
//       } 

//     if (minutes > 58) {
//         hour++;
//         hr.innerHTML = "0" + hour;
//         minutes = 0;
//         min .innerHTML = ":0" + minutes;
//   }
//   if (hour > 9) {
//     hr.innerHTML = hour;
//   }

// }
// }
