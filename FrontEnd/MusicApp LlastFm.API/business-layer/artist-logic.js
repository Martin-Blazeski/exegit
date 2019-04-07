import {ArtistRepository} from "../repository-layer/artist-repo.js";
import { AlbumRepository } from "../repository-layer/album-repo.js";
import { TrackRepository } from "../repository-layer/tracks-repo.js";
export function ArtistPageLogic() {

    this.artistRepo = new ArtistRepository();
    this.albumRepo = new AlbumRepository ();
    this.trackRepo = new TrackRepository();
    this.getDataForArtistPage = async function(artistName) {
        var artistData = await this.artistRepo.getArtistInfo(artistName);
        var albumData = await this.albumRepo.getTopAlbums(artistName);
        
        var pageData = {
            artistInfo: artistData ,
            topalbums : albumData
             
        };

        return pageData;
    }

    this.searchArtist= async function(artistName) {
        try {
            var response =  await fetch('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='
            + artistName + '&api_key=fd6cd01d92f7d2320a684d139626e02d&format=json');
            var dataSearch = await response.json();
            console.log("Response from searchArtist API", dataSearch);
            return new Artist(dataSearch);
        } catch(error) {
            return error;
        }
        var searchData = {

            searchSugest : dataSearch
        };
        return searchData;

        }
    }
 

