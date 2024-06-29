let date=prompt("enter date & time in standard form (ex: 13 june 2024 09:18 AM)");
const endDate=date;
document.getElementById("end-date").innerText=endDate;
const input = document.querySelectorAll("input");
 
function clock (){
// const audio = new Audio('beep-01a.mp3');
  const end = new Date(endDate);
  const now =new Date()
  const diff = (end - now)/1000;
  console.log(diff);
  if(diff<0) return;
  input[0].value=Math.floor( diff /3600/24);
  input[1].value=Math.floor(diff/3600)%24;
  input[2].value=Math.floor(diff/60)%60;
  input[3].value=Math.floor(diff)%60;
//  if(diff == 0) { audio.play(); }
}
clock()
setInterval(()=>{
   clock()
},1000)


