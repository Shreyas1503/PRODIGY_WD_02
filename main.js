var timer = document.querySelector('.timer');
var toggleBtn = document.querySelector('.toggle');
var resetBtn = document.querySelector('.reset');
var lapBtn = document.querySelector('.lap');
var lapbox = document.querySelector('.lapbox');


var watch = new stopwatch(timer);

function start (){
    toggleBtn.textContent = 'Stop';
    toggleBtn.classList.toggle("on");
    watch.start();
}

function stop(){
    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
}

function stopWhenOn(){

    toggleBtn.textContent = 'Start';
    toggleBtn.classList.toggle("on")
    watch.stop();
    watch.reset();
}


toggleBtn.addEventListener('click', function(){
    //stop
    watch.isOn ? watch.lapOn() : watch.reset();
})

lapBtn.addEventListener('click', function(){
    watch.isOn ? watch.lapOn() : watch.lapOff();  
})