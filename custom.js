let current_minute = document.querySelector("#current_minute")
let current_second = document.querySelector("#current_second")

let duration_minute = document.querySelector("#duration_minute")
let duration_second = document.querySelector("#duration_second")
let videoTag = document.querySelector("video")
let range = document.querySelector("#range")


function ranging() {
    range.value = videoTag.currentTime * (1000/videoTag.duration)
}

function current_time() {

    if (videoTag.currentTime%60 <10) {
        current_second.innerHTML = "0"+ videoTag.currentTime%60;
    } else{
        current_second.innerHTML = (videoTag.currentTime%60);;
    }

    if (videoTag.currentTime/60 <10) {
        current_minute.innerHTML = "0"+ videoTag.currentTime/60;
    } else{
        current_minute.innerHTML = videoTag.currentTime/60;
    }


    
    if (videoTag.duration%60 <10) {
        duration_second.innerHTML = "0"+ videoTag.duration%60;
    } else{
        duration_second.innerHTML = (videoTag.duration%60);
    }

    if (videoTag.duration/60 <10) {
        duration_minute.innerHTML = "0"+ videoTag.duration/60;
    } else{
        duration_minute.innerHTML = videoTag.duration/60;
    }
}

function VidSeek() {
    let seekto = videoTag.duration * (range.value/1000)
    videoTag.currentTime = seekto;
}