const video = document.querySelector("#video");
const play = document.querySelector("#play i img");
const stop = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const time = document.querySelector("#timestamp");
console.log(time);

//Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.setAttribute("src", "./img/play.svg");
  } else {
    play.setAttribute("src", "./img/pause.svg");
  }
}

//Update progress and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  time.innerHTML = `${mins}:${secs}`;
}

//Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//Event Listener
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
