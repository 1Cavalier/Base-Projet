function Apparition() {
    var custDiv = document.getElementById("Box-Audio");
    if (custDiv.style.display === "none") {
        custDiv.style.display = "block";
    } else {
        custDiv.style.display = "none";
    }
}

const musics = [{
        id: 1,
        title: "Holo",
        file: "holo.mp3",
    },
    {
        id: 2,
        title: "Summer",
        file: "summer.mp3",
    },
];