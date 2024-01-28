function stopwatch(elem){
    var time=0;
    var offset;
    var interval;

    function lapOn(){
        var lapTime = lapbox.appendChild(document.createElement("li"))
        lapTime.innerHTML = elem.textContent;
        lapTime.classList = 'lapItem'
    }

    function lapOff(){
        return;
    }

    function update(){
        if(this.isOn){
            time += delta();
        }

        elem.textContent = timeFormatter(time);
    }

    function delta(){
        var now = Date.now();
        var timePassed = now - offset;

        offset = now;
        return timePassed;
    }

    function timeFormatter(){

        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var miliseconds = time.getMiliseconds().toString();


        if(minutes.length < 2){
            minutes = '0' + minutes;
        }

        if(seconds.length < 2){
            seconds = '0' + seconds;
        }

        while (miliseconds.length < 3){
            miliseconds = '0' + miliseconds;
        }


        var result = minutes + ':' + seconds + ':' + miliseconds;

        return result;
    }

    this.start = function (){
        interval = setInterval(update.bind(this), 1);
        offset = Date.now();
        this.isOn = true;
    }

    this.stop = function(){
        clearInterval(interval);
        interval=null;
        this.isOn=false;
    };

    this.reset = function(){
        time=0;
        lapbox.innerHTML = '';
        interval=null;
        this.isOn = false;
        update();
    };

    this.lapOn = function(){
        this.lapOn();
    }

    this.lapOff = function(){
        this.lapOff();
    }

    this.isOn = false;



}