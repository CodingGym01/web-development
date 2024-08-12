var isStop = true;
let sec = 0;
let min = 0;
let hr = 0;
function start(){
    console.log("starting")
    if(isStop == true){
        isStop = false;
        timer();
    }

}
function timer(){
    // console.log("finish")
    if(isStop == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec++;
        if(sec==60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hr++;
        }
        if(sec<10){
            sec = "0" + sec
        }
        if(min<10){
            min = "0" + min
        }
        if(hr<10){
            hr = "0" + hr
        }
        Stopwatch.innerHTML = hr + " : " + min + " : " + sec;
        setTimeout("timer()",1000);
    }
}
function reset(){
    isStop = true;
    sec = 0;
    min = 0;
    hr = 0;

    Stopwatch.innerHTML = "00 : 00 : 00";

}

function stop(){
    isStop = true
}
