const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');

const hands = document.getElementsByClassName('.hands')
console.log(hands);
setInterval(setClock, 1000);

function setClock() {
    a = new Date();
    let secs =  a.getSeconds() / 60;
    let mins =  (a.getMinutes() + secs) / 60;
    let hours = (a.getHours() + mins) / 12;
    changeBackground(a.getHours());
    setRotation(secHand, secs);
    setRotation(minuteHand, mins);
    setRotation(hourHand, hours);
}
function changeBackground(time) {
    //console.log(time)
    if(time < 12 && time > 5)
    document.body.className = "day"
    else if(time > 12 && time < 16)
    document.body.className = "afternoon"
    else if(time > 16 && time < 8)
    document.body.className = "eve"
    else
    document.body.className = "night"
}

function setRotation(elem, rotRatio) {
    elem.style.setProperty('--rotation', rotRatio*360);
}