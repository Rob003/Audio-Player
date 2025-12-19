const audioData = [
    {
        src: "audios/audio1.mp3",
        name: "Miyagi & Эндшпиль feat. Рем Дигга - I Got Love",
        img: "images/image1.png",
        isFavorite: false,
    },
    {
        src: "audios/audio2.mp3",
        name: "Eminem - Mockingbird",
        img: "images/image2.png",
        isFavorite: false,
    },
    {
        src: "audios/audio3.mp3",
        name: "Eminem - Venom",
        img: "images/image3.png",
        isFavorite: false,
    },
    {
        src: "audios/audio4.mp3",
        name: "50 Cent - Candy Shop",
        img: "images/image4.png",
        isFavorite: false,
    },
    {
        src: "audios/audio5.mp3",
        name: "Dr. Dre Feat. Snoop Dogg - Still D.R.E.",
        img: "images/image5.png",
        isFavorite: false,
    },
    {
        src: "audios/audio6.mp3",
        name: "Coolio - Gangsta's Paradise",
        img: "images/image6.png",
        isFavorite: false,
    },
    {
        src: "audios/audio7.mp3",
        name: "Dr. Dre - The Next Episode",
        img: "images/image7.png",
        isFavorite: false,
    },
    {
        src: "audios/audio8.mp3",
        name: "50 Cent - In Da Club",
        img: "images/image8.png",
        isFavorite: false,
    },

]

const audio = document.querySelector(".audio")
const audioImage = document.querySelector(".audioImage")
const audioName = document.querySelector(".audioName")

const audioVolumeBtn = document.querySelector(".audioVolumeBtn")
const volumeIcon = audioVolumeBtn.querySelector("i")

const audioListBtn = document.querySelector(".audioListBtn")
const audioRandomBtn = document.querySelector(".audioRandomBtn")
const audioRepeatBtn = document.querySelector(".audioRepeatBtn")
const audioFavoriteBtn = document.querySelector(".audioFavoriteBtn")

const progressInput = document.querySelector(".progressInput")
const audioCurrentTimeEl = document.querySelector(".audioCurrentTime")
const audioDurationEl = document.querySelector(".audioDuration")

const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const playPauseBtn = document.querySelector(".playPauseBtn")
const playPauseIcon = playPauseBtn.querySelector("i")



let audioIndex = 0;

function loadAudio(index) {
    let currentAudio = audioData[index]
    audio.src = currentAudio.src
    audioImage.src = currentAudio.img
    audioName.textContent = currentAudio.name
}

nextBtn.onclick = () => {
    if (audioIndex === audioData.length - 1) {
        audioIndex = 0
    } else {
        audioIndex++
    }
    loadAudio(audioIndex)
    if (audio.classList.contains("isPlay")) {
        playAudio()
    } else {
        pausAudio()
    }
    like()
}
prevBtn.onclick = () => {
    if (audioIndex === 0) {
        audioIndex = audioData.length - 1
    } else {
        audioIndex--
    }
    loadAudio(audioIndex)
    if (audio.classList.contains("isPlay")) {
        playAudio()
    } else {
        pausAudio()
    }
    like()
}

loadAudio(audioIndex)


function playAudio() {
    audio.play()
    audio.classList.add("isPlay")
    playPauseIcon.className = "fa fa-pause"
}

function pausAudio() {
    audio.pause()
    audio.classList.remove("isPlay")
    playPauseIcon.className = "fa fa-play"
}

playPauseBtn.onclick = () => {
    if (audio.classList.contains("isPlay")) {
        pausAudio()
    } else {
        playAudio()
    }
}

audio.addEventListener("timeupdate", function () {
    let audioDuration = audio.duration
    let audioCurrentTime = audio.currentTime

    if (audioCurrentTime > 0) {
        audioCurrentTimeEl.textContent = getTime(audioCurrentTime)
        audioDurationEl.textContent = getTime(audioDuration)
        progressInput.value = audioCurrentTime / audioDuration * 100
    }
})

function getTime(time) {
    let minuts = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    return `${minuts < 10 ? "0" + minuts : minuts} : ${seconds < 10 ? "0" + seconds : seconds}`
}


progressInput.oninput = () => {
    audio.currentTime = progressInput.value * audio.duration / 100
}

audio.addEventListener("ended", function () {

})

audioRandomBtn.onclick = () => {
    audioRandomBtn.classList.toggle("activ")
    audioRepeatBtn.classList.remove("activ")
}

audioRepeatBtn.onclick = () => {
    audioRepeatBtn.classList.toggle("activ")
    audioRandomBtn.classList.remove("activ")
}

audioFavoriteBtn.onclick = () => {
    if (audioData[audioIndex].isFavorite === false) {
        audioData[audioIndex].isFavorite = true
    } else if (audioData[audioIndex].isFavorite === true) {
        audioData[audioIndex].isFavorite = false
    }

    like()
    let audioDataFavorite = likeArr(audioData)
}


function like() {
    if (audioData[audioIndex].isFavorite) {
        audioFavoriteBtn.classList.add("activ")
    } else {
        audioFavoriteBtn.classList.remove("activ")
    }
}

like()

function likeArr(arr) {
    let audioDataFavorite = arr.filter(el => el.isFavorite === true)
    return audioDataFavorite
}
