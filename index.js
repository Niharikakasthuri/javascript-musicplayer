const songs = [
    { title: 'ALIBI', src: 'assests/alibi.mp3', img:'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/74/f9/9f/74f99f7a-966d-2940-f4ac-b9158be2a030/cover.jpg/600x600bf-60.jpg', artist:'Sevdaliza, Pabllo Vittar & Yseult' },
    { title: 'NIGHT CHANGES', src: 'assests/night changes.mp3', img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1da24c13-faae-4a1d-8c92-25764a0f47b4/de2av56-9ce14895-ecc3-4d4f-95ac-b7cb51cb6a26.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFkYTI0YzEzLWZhYWUtNGExZC04YzkyLTI1NzY0YTBmNDdiNFwvZGUyYXY1Ni05Y2UxNDg5NS1lY2MzLTRkNGYtOTVhYy1iN2NiNTFjYjZhMjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0GTMSmXV3HKE-dzhntNQd39G_GcvRge2tOzJtUymtrQ', artist:'One Direction' },
    { title: '3D', src: 'assests/3D.mp3', img:'https://m.media-amazon.com/images/I/31wWqFXM7qL._UXNaN_FMjpg_QL85_.jpg', artist:'Jungkook' },
    { title: 'TAUBA TAUBA', src: 'assests/tauba tauba.mp3', img:'https://c.saavncdn.com/719/Tauba-Tauba-From-Bad-Newz-Hindi-2024-20240702073742-500x500.jpg', artist:'Karan Aujla' },
    { title: 'WE DONT TALK ANYMORE', src: 'assests/we dont talk anymore.mp3', img:'https://m.media-amazon.com/images/M/MV5BOWQyYmJiOWUtNzkzYS00YWJlLWI5YjgtYTg4MjI0MmM1N2ZkXkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg', artist:'Selena Gomez & Charlie Puth' }
];

const colors = [
    '#f05a4f',
    '#4ff0af',
    '#5bc1fc',
    '#FF677D',
    '#FFABAB'
]

let currentIndex = 0;

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');
const songTitle = document.getElementById('song-title');
const playlist = document.getElementById('playlist');
const fileInput = document.getElementById('file-input')
const image = document.getElementById('img')
const artistName = document.getElementById('song-artist')
const body = document.body

document.getElementById('play').addEventListener('click', () => {
    audio.play();
});

document.getElementById('pause').addEventListener('click', () => {
    audio.pause();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    audio.play();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong(currentIndex);
    audio.play();
});

function loadSong(index) {
    audioSource.src = songs[index].src;
    songTitle.textContent = songs[index].title;
    image.src = songs[index].img
    artistName.textContent = `Song by ${songs[index].artist}`
    body.style.backgroundColor = getRandomColor()
    audio.load();
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function createPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => {
            currentIndex = index;
            loadSong(currentIndex);
            audio.play();
        });
        playlist.appendChild(li);
    });
}

// Initialize the playlist and load the first song
createPlaylist();
loadSong(currentIndex);
