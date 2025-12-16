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
const audioCurrentTime = document.querySelector(".audioCurrentTime")
const audioDuration = document.querySelector(".audioDuration")

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
}
prevBtn.onclick = () => {
    if (audioIndex === 0) {
        audioIndex = audioData.length - 1
    } else {
        audioIndex--
    }
    loadAudio(audioIndex)
}


loadAudio(audioIndex)