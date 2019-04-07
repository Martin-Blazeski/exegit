import {ArtistPageLogic} from "../business-layer/artist-logic.js";

export function Renderer() {
    this.pageData = null;
    this.searchData = null;
    this.mainContainer = $("#main-container");

    this.pageLogic = new ArtistPageLogic();
    var self = this;
    
    this.renderAll = function() {
        console.log(this.pageData);
       
        this.renderTop();
 
        this.renderBottom();
       
    }

    this.renderTop = function(){    
        //SEARCH BAR
        
        var searchBar = $('<div>').addClass('searchWrap').appendTo(this.mainContainer);
                    $('<input>').attr('id', 'searchInput').attr('placeholder','Artist Name').on('click', '').appendTo(searchBar);
                    $('<button>').attr('id','searchButton').text('SEARCH NEW ARTIST').appendTo(searchBar);

                    $('#searchButton').on('click', (e) => {
                        e.preventDefault ();
                        this.init ($('#searchInput').val());
                    
                    });

                    $('#searchInput').on('input', async (e) => {
                        e.preventDefault ();
                        var results = await this.pageLogic.getSearchforInput($(e.target).val());
                        this.init ($('#searchInput').val());
                    
                    });
                    
        var topWrapper = $('<div>').addClass('top-wrapper').appendTo(this.mainContainer);
       

        var leftPart = $('<div>').addClass('left-side').appendTo(topWrapper);

        var artistName = $('<div>').addClass('artist-name').appendTo(leftPart);
        $(artistName).text(this.pageData.artistInfo.name);
        
        var artistImage = $('<img>').addClass('artist-image').appendTo(leftPart);
        $(artistImage).attr('src',this.pageData.artistInfo.images[3]['#text']);

        
        

    
        var rightPart = $('<div>').addClass('right-side').appendTo(topWrapper);

        var similarArtist = $('<div>').addClass('similar-artist').text('Similar Artists').appendTo(rightPart);      
        
        
        
        for (var i = 0; i < 4 ; i++){
           

            var similartImage = $('<img>').addClass('similar-image').attr('id', 'img' + i)
            .attr('src',this.pageData.artistInfo.similar.artist[i].image[2]['#text']).appendTo(rightPart); 
            
        
            var similarName = $('<div>').addClass('similar-name').attr('id', 'art' + i)
            .text(this.pageData.artistInfo.similar.artist[i].name).on('click', function (event){
                self.init($(event.target).text());
            }).appendTo(rightPart);
                        
        }
        
        
        

    }

    this.renderBottom = function(){

        var bottomWrapper = $('<div>').addClass('bottom-wrapper').appendTo(this.mainContainer);

        var bottomInfo = $('<div>').addClass('bottom-info').appendTo(bottomWrapper);
        
        
        //STATS: LISTENERS AND PLAY COUNT
        
        var stats = $('<div>').addClass('stats').appendTo(bottomInfo);
        var p1 = $('<p>').addClass('p1').text('Listeners: '+ this.pageData.artistInfo.statistics.listeners).appendTo(stats);
        var p2 = $('<p>').addClass('p2').text('Playcount: '+ this.pageData.artistInfo.statistics.playcount).appendTo(stats);
        
        

        var tags = $('<div>').addClass('tags').appendTo(bottomInfo);
        $(tags).text(this.pageData.artistInfo.tags.tag[0].name);
       
       
        ///MAIN CONTENT
        var botContentSum = $('<div>').addClass('content-summary').appendTo(bottomWrapper);

        var summary = $('<div>').addClass('content').appendTo(botContentSum);
        $(summary).text(this.pageData.artistInfo.biography.summary);

        var content = $('<div>').addClass('summary').appendTo(botContentSum);
        $(content).text(this.pageData.artistInfo.biography.content);


        ///ALBUMS
       var allAlbums= this.pageData.topalbums.album.album;
        for (var g = 0; g <= allAlbums.length; g ++){
        var albums = $ ('<div>').attr('id','albumContent').appendTo(botContentSum);
        $('<p>').text( g+1 + " - " + this.pageData.topalbums.album.album[g].name).appendTo(albums);
        var albumImg = $('<img>').addClass('album-img').attr('src',this.pageData.topalbums.album.album[g].image[2]['#text']).appendTo(albums);        
       
        }


    
    }

        //
    this.init = async function(artistName) {
        this.pageData = await this.pageLogic.getDataForArtistPage(artistName);
        this.mainContainer.html("");
        this.renderAll();
    }
}