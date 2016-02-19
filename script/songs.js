
var songPlaceHolder01 = "";
var songPlaceHolder02 = "";

function addMusicList1(data) {
   console.log(data.musicList1);
    var songElement = data.musicList1;
    for (var i = 0; i < songElement.length; i++) {
    	var currentSong = songElement[i];
    	songPlaceHolder01 += "<div id='musicList--" + i + "' class='song'>";
		songPlaceHolder01 += "<button class='deleteButton'>Delete</button>";
  		songPlaceHolder01 += "<h2>" + currentSong.name + "</h2>";	
		songPlaceHolder01 += "<ul>";
		songPlaceHolder01 += "<li>" + currentSong.artist + "</li>";	
		songPlaceHolder01 += "<li>" + currentSong.album + "</li>";	
		songPlaceHolder01 += "</ul>";
		songPlaceHolder01 += "</div>";
    }
    	songPlaceHolder01 +="<button id='moreSongs' class='moreSongs'>More Songs</button>";
		$('#info').html(songPlaceHolder01);
  }
    
function addMusicList2(data) {
   console.log(data.musicList2);
   	var counter = 4
    var songElement = data.musicList2;
    for (var i = 0; i < songElement.length; i++) {
    	var currentSong = songElement[i];
    	songPlaceHolder02 += "<div id='musicList--" + counter + "' class='song'>";
		songPlaceHolder02 += "<button class='deleteButton'>Delete</button>";
  		songPlaceHolder02 += "<h2>" + currentSong.name + "</h2>";	
		songPlaceHolder02 += "<ul>";
		songPlaceHolder02 += "<li>" + currentSong.artist + "</li>";	
		songPlaceHolder02 += "<li>" + currentSong.album + "</li>";	
		songPlaceHolder02 += "</ul>";
		songPlaceHolder02 += "</div>";
		counter++;
    }
		$('#info').append(songPlaceHolder02);
  }    
// Adds Song
// called within buildform button
function setSong() {
	var counter = 8;
	string = $("#song-input").val();
	artistString = $("#song-input").val();
	albumString = $("#album-input").val();
	
	var addedSong = "";
	addedSong += "<div id='musicList--" + counter + "' class='song'>";
	addedSong += "<button class='deleteButton'>Delete</button>";
	addedSong += "<h2>" + string + "</h2>";	
	addedSong += "<ul>";
	addedSong += "<li>" + artistString + "</li>";	
	addedSong += "<li>" + albumString + "</li>";	
	addedSong += "</ul>";	
	addedSong += "</div>";	
	$('#info').append(addedSong);

	$("#song-input").val("");
	$("#artist-input").val(""); 
	$("#album-input").val("");
}

//ADD-MUSIC SECTION BUILT OUT
var buildForm = "<label>Song Name:</label>";
	buildForm += "<input type='text' id='song-input'>";
	buildForm += "<label>Artist:</label>";
	buildForm += "<input type='text' id='artist-input'>";
	buildForm += "<label>Album:</label>";
	buildForm += "<input type='text' id='album-input'>";
	buildForm += "<button id='add' onclick='setSong();'>Add</button>";
	$("#add-view").html(buildForm); 

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




