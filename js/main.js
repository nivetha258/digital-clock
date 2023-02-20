

setInterval(()=>{
const dateObj = new Date();
let year = dateObj.getFullYear();
let month = dateObj.getMonth();
let date = dateObj.getDate();
let day = dateObj.getDay();
let hours = dateObj.getHours();
let mins = dateObj.getMinutes();
let secs = dateObj.getSeconds();
let meridian = hours <12? 0:1;
date = date < 10 ? "0"+ date : date;
month = month + 1 ;
month = month < 10? "0"+month : month;
year = year %100;
hours = hours > 12 ? hours-12 : hours;
hours = hours <10 ? "0"+ hours: hours;
mins =  mins < 10 ? "0" + mins : mins;
secs =  secs < 10 ? "0" + secs : secs;



document.getElementById("date").innerText= date;
document.getElementById("month").innerText= month;
document.getElementById("year").innerText= year;
document.getElementById("hour").innerText= hours;
document.getElementById("mins").innerText= mins || "00";
document.getElementById("secs").innerText= secs;

document.getElementsByClassName("day")[day].setAttribute("checked",true)
document.getElementsByClassName("meridian")[meridian].setAttribute("checked",true)
},1000
)