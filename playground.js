//write func to get json
//make ajax to fetch

//https://rallycoding.herokuapp.com/api/music_albums

function fetchAlbums(){
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  .then (res=>res.json())
  .then(json=>console.log(json));
}

fetchAlbums();


//TOOOO


async function fetchAlbums(){
  const res=await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json=await (res=>res.json())
  console.log(json);
}

fetchAlbums();
