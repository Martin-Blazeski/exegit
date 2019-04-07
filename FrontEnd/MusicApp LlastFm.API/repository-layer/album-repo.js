import {Album} from "../entities/album.js";


export function AlbumRepository() {

    this.getTopAlbums= async function(artistName) {
        try {
            var response =  await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='
            + artistName + '&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json');
            var dataAlbum = await response.json();
            console.log("Response from getTopAlbum API", dataAlbum);
            return new Album(dataAlbum);
        } catch(error) {
            return error;
        }
    }
}

