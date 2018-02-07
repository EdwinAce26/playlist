// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var title = $("#title").val();
var artist = $("#artist").val();
var mp3 = $("#mp3Url").val()
var image = $("#imageUrl").val()


var mySong = {
	"title": title ,
	"artist": artist,
	"mp3-url":mp3,
	"image-url":image,
}

var myPlayList = [
	{
		"title":"",
		"artist":"",
		"mp3-url":,
		"image-url":,
	{
		"title":"",
		"artist":",
		"mp3-url":"",
		"image-url":",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  

console.log(myPlayList);

	displaySongs(myPlayList)



	//READ All
	function displaySongs(songs){
		clearAllSongs()
		for(var i = 0; i < songs.length; i++){	
			$(".result-text").append(
			<div id="' + i + '">
				<div class="col-md-8" id="info">
					<h3 id="title">' + songs[i]["title"] + '</h3>
					<a href=' + songs[i]["mp3-url"] + '> Listen </a>
				</div>
				<div class="col-md-4" >
					<img src=' + songs[i]["image-url"] + '>
					<span class="glyphicon glyphicon-remove delete" id="' + i + '"></span>\
					<span class="glyphicon glyphicon-edit update" id="' + i + '"></span>\
				</div>
				<div class="col-md-12"><hr></div>
			</div>
			);
	   	}
	}


});

function displayList(){


  
}

function clearList(){
  
  
  
}

function addSong(){
 var newSong = {
			"title": $('#title').val(),
			"artist": $('#artist').val(),
		
			"mp3Url": $('#mp3Url').val(),
			"imageUrl": $('#imageUrl').val(),
			"genres":[
				$('#title').val()
			]
		}
		myPlayList.push(newSong);
	}

	$("#createSong").click(function(){

		createSong();
		displaySongs(myPlayList)

	});
