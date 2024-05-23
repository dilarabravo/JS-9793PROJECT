let number = document.getElementById("number");
const button = document.getElementById("button");

value = 0;
button.addEventListener("click", function(){
    value++;

    document.getElementById("number").innerHTML = value;
})

let audio = document.getElementById("myAudio");
let playButton = document.getElementById("playButton");
let pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", function(){
    audio.play();
})
pauseButton.addEventListener("click", function(){
    audio.pause();
})

let audio2 = document.getElementById("myAudio2");
let playButton2 = document.getElementById("playButton2");
let pauseButton2 = document.getElementById("pauseButton2");

playButton2.addEventListener("click", function(){
    audio2.play();
})
pauseButton2.addEventListener("click", function(){
    audio2.pause();
})


