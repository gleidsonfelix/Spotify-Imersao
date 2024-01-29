const searchiInput = document.getElementById("#search-input");
const resultArtist = document.querySelector(".result-artists");
const bodyText = document.querySelector(".body__text");
const playlists = document.querySelector(".playlists");


async function requestApi(searchValue) {

    const url = `http://localhost:3000/artists?name_like=${searchValue}`

    const response = await fetch(url);

    const data = await response.json();

    displayResults(data)
}

function displayResults(data) {

    bodyText.classList.add("hidden");
    playlists.classList.add("hidden");
    resultArtist.classList.remove("hidden");

    const artistName = document.querySelector(".artist-name");
    const artistImg = document.querySelector(".artist-img");

    data.forEach((artist) => {

        artistName.innerText = artist.name;
        artistImg.src = artist.urlImg;

    })
    
}
   


document.addEventListener("input", (e) => {

    const searchValue = searchiInput.value.toLowerCase();

    if (searchValue === '') {
        bodyText.classList.remove("hidden");
        playlists.classList.remove("hidden");
        resultArtist.classList.add("hidden");
        return;
    }

    requestApi(searchValue)

})








