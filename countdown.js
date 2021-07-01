console.log("Countdown");

let countdownDisplay = document.getElementsByClassName('countdownDisplay');
let daysDisplay = document.getElementById('daysDisplay');
let hoursDisplay = document.getElementById('hoursDisplay');
let minsDisplay = document.getElementById('minsDisplay');
let secsDisplay = document.getElementById('secsDisplay');
let inputBox = document.getElementsByName('inputBox');
let countdownSubmitBtn = document.getElementById('countdownSubmitBtn'); 
let resetBtn = document.getElementById('resetBtn'); 



countdownSubmitBtn.addEventListener('click', ()=>{
   var i = setInterval(() => {

           let input = document.getElementById('input');
               let today = new Date();
               let countdownDate = new Date(`${input.value}`);
               // console.log(a);
               let distance = countdownDate.getTime() - today.getTime();

               // console.log(distance);
               
               let days = Math.floor(distance / (1000*60*60*24));
               let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
               let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
               let seconds = Math.floor((distance % (1000*60)) / (1000));
               
               // console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
               // countdownDisplay.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
               
               // console.log(hours);
               
               if (distance > 0) {
                   daysDisplay.innerText = `${days}d `
                   hoursDisplay.innerText = `${hours}h `
                   minsDisplay.innerText = `${minutes}m `
                   secsDisplay.innerText = `${seconds}s`
                }
                
                else{
                    daysDisplay.innerText = 'Expired'
                   hoursDisplay.innerText = ''
                   minsDisplay.innerText = ''
                   secsDisplay.innerText = '';
                    clearInterval(i);
                }
               
       
}, 1000);
})


resetBtn.addEventListener('click', ()=>{
    // clearInterval();
    location.reload();
})