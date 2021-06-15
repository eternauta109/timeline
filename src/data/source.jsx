

const arrayTime = [];

let hour = "";
let minute = "";

for (let h = 6; h < 28; h++) {

  
  for (let m = 0; m < 46; m += 15) {
    const tick = {
  hour: "",
  minute: "",
  time: "",
  head: 0
  };

  if (h < 10) {
    hour = `0${h}`;
  } else{
    hour=`${h}`;
  }
  tick.hour = `${hour}`;
  
    if (m===0) {
      minute=`0${m}`
    } else {
      minute=`${m}`
    }
    
    
    tick.minute = `${minute}`;
    tick.time = `${tick.hour}:${tick.minute}`;
    
    arrayTime.push(tick);
  }
  
}


export default arrayTime;


/* tick.hour = `${hour}`;
    tick.minute = `${minute}`;
    tick.time = `${tick.hour}:${tick.minute}`;
    console.log(tick);
    arrayTime.push(tick); */