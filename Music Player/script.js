const music = document.querySelector('audio');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const titile = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs =[
    {
    name:'01',
    titile: 'Dilbar',
    artist: 'Vishal Mishra',
    length:'03'
},
{
    name:'02',
    titile: 'Afreeda',
    artist: 'Sanaa Moussa . Raja Kumari '
},
{
    name:'03',
    titile: 'Baarish Ban Jaana',
    artist: 'Payal Dev,Stebin Bin'
},
{
    name:'04',
    titile: 'Baarish',
    artist: 'Payal Dev,Stebin Bin'
},

{
    name:'05',
    titile: 'Barsaat Ki Dhun',
    artist: 'Jubin Nautiyal; '
},

{
    name:'06',
    titile: 'Buddhu Sa Mann',
    artist: 'Armaan Malik '
},

{
    name:'07',
    titile: 'Dil Bechara',
    artist: 'AR Rahman'
},

{
    name:'08',
    titile: 'Dil Ko Karaar Aaya',
    artist: 'Neha Kakkar , Yasser Desai '
},

{
    name:'09',
    titile: 'Friendzone',
    artist: 'AR Rahman'
},

]

let songLisHtml = '<div>'
songs.forEach((item, i)=> {
    songLisHtml  = songLisHtml + 
    '<div class="aa">' + item.titile + '</div>' +
    '<div>' + item.artist + '</div>' + 
    '<div>' + item.name + '</div>' 
})
songLisHtml += '</div>'

document.getElementById('songlist').innerHTML = songLisHtml


let isPlaying = false;

const  playMusic =()=>{
    isPlaying = true
    music.play()
    play.classList.replace('fa-play', 'fa-pause')
}


const  pauseMusic =()=>{
    isPlaying = false
    music.pause()
    play.classList.replace('fa-pause','fa-play' )
}

play.addEventListener('click',()=>{
    isPlaying? pauseMusic(): playMusic()
})

// Chnaging the music data

const loadSongs =(songs)=>{
    titile.textContent = songs.titile;
    artist.textContent = songs.artist;
    music.src= 'musics/'+ songs.titile + ".mp3"
}

// loadSongs(songs[6])

songIndex =0;

const nextSong =()=>{
    songIndex = (songIndex+1) % songs.length 
    loadSongs(songs[songIndex])
    playMusic()
}


const prevSong =()=>{
    songIndex = (songIndex-1 + songs.length ) % songs.length 
    loadSongs(songs[songIndex])
    playMusic()
}

next.addEventListener('click',nextSong)

prev.addEventListener('click',prevSong)


// document.getElementById("demo").innerHTML = songs.map(getFullName);

// function getFullName(songs) {
//     return [songs.titile,songs.artist] 
//   }