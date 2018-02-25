
// Songs
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  

console.log(myPlayList);

	displaySongs(myPlayList)


var title = $("#title").val();
var artist = $("#artist").val();
var mp3 = $("#mp3Url").val()
var image = $("#imageUrl").val()


var mySong = {
<<<<<<< HEAD
	"title": title ,
	"artist": artist,
	"mp3-url":mp3,
	"image-url":image,
=======
	"title":"Somebodys watching me",
	"artist":"Rockwell",
	"mp3url":"https://www.youtube.com/7YvAYIJSSZY",
	"imageurl":"http://assets.nydailynews.com/polopoly_fs/1.3196820.1495758867!/img/httpImage/image.jpg_gen/derivatives/article_750/rockwell26f-1-web.jpg",
>>>>>>> 1eb9cd7a4d12e6617e2f4d362da6f1c1d632aeb6
}

var myPlayList = [
	{
		"title":"Waterfalls",
		"artist":"TLC",
		"mp3-url":"https://youtu.be/8WEtxJ4-sh4",
		"image-url":"https://www2.shutterstock.com/blog/wp-content/uploads/sites/5/2017/04/chinafalls1-1024x681.jpg",
	},
	{
		"title":"Mine",
		"artist":"Bazzi",
		"mp3-url":"https://youtu.be/Gc71AmT_b2k",
		"image-url":"https://d1kvcwstn4nsit.cloudfront.net/posts/112545-340x340.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]

<<<<<<< HEAD
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
					<img src=' + songs[i]["image-url"] + '/>
					<span class="glyphicon glyphicon-remove delete" id="' + i + '"></span>
					<span class="glyphicon glyphicon-edit update" id="' + i + '"></span>
				</div>
				<div class="col-md-12"><hr></hr></div>
			</div>
			);
	   	}
	}
=======


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
  
$('body').append("<p>Title: " + mySong.title + "</p>");
$('body').append("<p>Artist: " + mySong.artist + "</p>");
$('body').append("<p>MP3: " + mySong.mp3url + "</p>");
$('body').append("<img src='" + mySong.imageurl + "'>");


>>>>>>> 1eb9cd7a4d12e6617e2f4d362da6f1c1d632aeb6



function displaylist(){


  
}

function clearList(){
  
}

function addSong(){
<<<<<<< HEAD
 var newSong = {
			"title": $('#title').val(),
			"artist": $('#artist').val(),
			"mp3Url": $('#mp3Url').val(),
			"imageUrl": $('#imageUrl').val(),
		}
		myPlayList.push(newSong);
	}

	$("#createSong").click(function(){

		createSong();
		displaySongs(myPlayList)

	});
=======
 
  
  
}

	
	
});
>>>>>>> 1eb9cd7a4d12e6617e2f4d362da6f1c1d632aeb6
