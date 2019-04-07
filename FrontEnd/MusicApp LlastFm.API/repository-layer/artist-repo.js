import {Artist} from "../entities/artist.js"

export function ArtistRepository() {

    this.getArtistInfo = async function(artistName) {
        try {
            var response =  await fetch("http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=" 
            + artistName + "&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json");
            var data = await response.json();
            console.log("Response from getArtistInfo API", data);
            return new Artist(data.artist);
        } catch(jamesBond) {
            return jamesBond;
        }
    }
}