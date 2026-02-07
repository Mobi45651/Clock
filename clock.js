let angle = 0;
let angleS = 0;
let angleH = 0;

setInterval(() => {
    let nows = new Date();
    let second = nows.getSeconds();
    if (second === 0) {
        angle = angle + 360;
        let min = document.getElementById("Mins");
        min.style.transform = `rotateX(${angle}deg)`;
    }

    
    document.getElementById("sectext").innerHTML = String(second).padStart(2, '0');
    angleS = angleS + 360;
    let sec = document.getElementById("Sec");
    sec.style.transform = `rotateX(${angleS}deg)`;
    let nowm = new Date();
    let minutes = nowm.getMinutes();
    document.getElementById("mintext").innerHTML = String(minutes).padStart(2, '0');
    let nowh = new Date();
    let hour24 = nowh.getHours();
    if (second == 0 && minutes == 0) {
        let hrs = document.getElementById("Hours");
        angleH = angleH + 360;
        hrs.style.transform = `rotateX(${angleH}deg)`;
        
    }
    let hour12 = hour24 % 12;
    document.getElementById("hourstext").innerHTML = String(hour12).padStart(2, '0');
}, 1000);