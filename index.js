let startTime = 0;
let currentTime = 0;
let lapTimes = [];
let intervalId = null;

document.getElementById('start-button').addEventListener('click', startStopwatch);
document.getElementById('pause-button').addEventListener('click', pauseStopwatch);
document.getElementById('reset-button').addEventListener('click', resetStopwatch);
document.getElementById('lap-button').addEventListener('click', lapTime);

function startStopwatch() {
  startTime = new Date().getTime();
  intervalId = setInterval(updateTime, 1000);
  document.getElementById('start-button').disabled = true;
  document.getElementById('pause-button').disabled = false;
}

function pauseStopwatch() {
  clearInterval(intervalId);
  document.getElementById('start-button').disabled = false;
  document.getElementById('pause-button').disabled = true;
}

function resetStopwatch() {
  startTime = 0;
  currentTime = 0;
  lapTimes = [];
  document.getElementById('hours').innerHTML = '00';
  document.getElementById('minutes').innerHTML = '00';
  document.getElementById('seconds').innerHTML = '00';
  document.getElementById('lap-times-list').innerHTML = '';
  document.getElementById('start-button').disabled = false;
  document.getElementById('pause-button').disabled = true;
}

function lapTime() {
  const lapTime = currentTime;
  lapTimes.push(lapTime);
  const lapTimeList = document.getElementById('lap-times-list');
  const lapTimeListItem = document.createElement('li');
  lapTimeListItem.innerHTML = `Lap ${lapTimes.length}: ${formatTime(lapTime)}`;
  lapTimeList.appendChild(lapTimeListItem);
}

function updateTime() {
  currentTime = new Date().getTime() - startTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  document.getElementById('hours').innerHTML = padTime(hours);
  document.getElementById('minutes').innerHTML = padTime(minutes);
  document.getElementById('seconds').innerHTML = padTime(seconds);
}

function padTime(time) {
  return (time < 10 ? '0' : '') + time;
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000);}