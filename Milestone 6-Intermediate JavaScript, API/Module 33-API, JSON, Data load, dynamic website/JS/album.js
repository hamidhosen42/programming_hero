function loadAlbums() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((respons) => respons.json())
    .then((data) => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
  console.log(albums);
  const albumContainer = document.getElementById("albums");

  for (const album of albums) {
    const p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.color='red';
    p.innerText = album.title;
    albumContainer.appendChild(p);
  }
}