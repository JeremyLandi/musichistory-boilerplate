




// $('#link-add').click

// linkHome.addEventListener("click", linkHomeFunction);
// linkAdd.addEventListener("click", linkAddFunction);

// var linkHome = document.getElementById("link-home");
// var linkAdd = document.getElementById("link-add");


//HIDE-SHOW FUNCTIONS
	// function linkHomeFunction() {
		
	// }
// function linkAddFunction() {
	
// }


// $("#music-view").click(function() {

// })

// var viewMusicSection = document.getElementById("music-view");
// var addMusicSection = document.getElementById("add-view");
var songPlaceHolder = "";
var toDOM = document.getElementById('info');


//BIND EVENTS

//ADD-MUSIC SECTION BUILT OUT
var songInfo = document.getElementById("add-view");
var buildForm = "<label>Song Name:</label>"
	buildForm += "<input type='text' id='song-input'>"
	buildForm += "<label>Artist:</label>"
	buildForm += "<input type='text' id='artist-input'>"
	buildForm += "<label>Album:</label>"
	buildForm += "<input type='text' id='album-input'>"
	buildForm += "<button id='add' onclick='setSong();'>Add</button>";
songInfo.innerHTML = buildForm; 


function addMusicList1(data) {
   console.log(data.musicList1);

    var songElement = data.musicList1;
    for (var i = 0; i < songElement.length; i++) {
    	var currentSong = songElement[i];
    	songPlaceHolder += "<div id='musicList--" + i + "' class='song'>";
		songPlaceHolder += "<button class='deleteButton'>Delete</button>";
  		songPlaceHolder += "<h2>" + currentSong.name + "</h2>";	
		songPlaceHolder += "<ul>";
		songPlaceHolder += "<li>" + currentSong.artist + "</li>";	
		songPlaceHolder += "<li>" + currentSong.album + "</li>";	
		songPlaceHolder += "</ul>";
		songPlaceHolder += "</div>";
    }
    	songPlaceHolder +="<button id='moreSongs' class='moreSongs'>More Songs</button>";
		toDOM.innerHTML = songPlaceHolder;
  }
    
function addMusicList2(data) {
   console.log(data.musicList2);
   	var counter = 4
    var songElement = data.musicList2;
    for (var i = 0; i < songElement.length; i++) {
    	var currentSong = songElement[i];
    	songPlaceHolder += "<div id='musicList--" + counter + "' class='song'>";
		songPlaceHolder += "<button class='deleteButton'>Delete</button>";
  		songPlaceHolder += "<h2>" + currentSong.name + "</h2>";	
		songPlaceHolder += "<ul>";
		songPlaceHolder += "<li>" + currentSong.artist + "</li>";	
		songPlaceHolder += "<li>" + currentSong.album + "</li>";	
		songPlaceHolder += "</ul>";
		songPlaceHolder += "</div>";
		counter++;
    }
		$(toDOM).append(songPlaceHolder);
  }    

function setSong() {
	var counter = 8;
	string = document.getElementById("song-input").value;
	artistString = document.getElementById("artist-input").value;
	albumString = document.getElementById("album-input").value;
	
	var addedSong = "";
	addedSong += "<div id='musicList--" + counter + "' class='song'>";
	addedSong += "<button class='deleteButton'>Delete</button>";
	addedSong += "<h2>" + string + "</h2>";	
	addedSong += "<ul>";
	addedSong += "<li>" + artistString + "</li>";	
	addedSong += "<li>" + albumString + "</li>";	
	addedSong += "</ul>";	
	addedSong += "</div>";	
	console.log("addedSong", addedSong);
	toDOM.innerHTML += addedSong;
	document.getElementById("song-input").value = "";
	document.getElementById("artist-input").value = "";
	document.getElementById("album-input").value = "";
}


// this is landing page
$("#link-home").click(function() {
	$("#add-view").toggle();
	$("#music-view").toggle();
})

//this is Add Music view
$("#link-add").click(function() {
	$("#add-view").toggle();
	$("#music-view").toggle();
})















