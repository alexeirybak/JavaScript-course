const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume");
const volumeIcons = document.querySelectorAll(".volume img");
const playlistEl = document.getElementById("playlist");

const tracks = [
  { name: "Return To Innocence / Enigma", src: "tracks/track1.mp3" },
  {
    name: "Living On My Own / Queen, Freddie Mercury",
    src: "tracks/track2.mp3",
  },
  {
    name: " Nothing Else Matter / Metallica",
    src: "tracks/track3.mp3",
  },
  {
    name: "The Sound Of Silence / Simon & Garfunkel; ",
    src: "tracks/track4.mp3",
  },
  { name: "A Neverending Dream / X-Perience", src: "tracks/track5.mp3" },
];

let currentTrackIndex = 0;

function setPlayList() {
  playlistEl.innerHTML = "";
  tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = track.name;
    li.addEventListener("click", () => {
      loadTrack(index);
      playTrack();
    });
    if (index === currentTrackIndex) {
      li.classList.add("active");
    }
    playlistEl.append(li);
  });
}

function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  audio.load();
  currentTrackIndex = index;
  setPlayList();
}
function playTrack() {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function pauseTrack() {
  audio.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

function stopTrack() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  playTrack();
}

function prevTrack() {
  currentTrackIndex = (currentTrackIndex - 1) % tracks.length;
  loadTrack(currentTrackIndex);
  playTrack();
}

function updateProgressBar() {
  const { currentTime, duration } = audio;
  if (isNaN(duration)) return;

  const progressPercent = (currentTime / duration) * 100;
  progressBar.value = progressPercent;
  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function seekTrack() {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
}

function updateVolume(volume) {
  audio.volume = volume;
  volumeIcons.forEach((icon, index) => {
    if (volume < 0.01) {
      icon.style.display = index === 0 ? "inline" : "none";
    } else {
      const iconIndexToShow = Math.min(Math.floor(volume * 3), 2);
      icon.style.display = index === iconIndexToShow + 1 ? "inline" : "none";
      console.log(iconIndexToShow);
    }
  });
}

audio.addEventListener("ended", nextTrack);
audio.addEventListener("timeupdate", updateProgressBar);
playBtn.addEventListener("click", playTrack);
pauseBtn.addEventListener("click", pauseTrack);
stopBtn.addEventListener("click", stopTrack);
prevBtn.addEventListener("click", prevTrack);
nextBtn.addEventListener("click", nextTrack);
progressBar.addEventListener("input", seekTrack);
volumeSlider.addEventListener("input", () => {
  const volume = volumeSlider.value;
  updateVolume(volume);
});

loadTrack(currentTrackIndex);
setPlayList();
updateVolume(volumeSlider.value);
