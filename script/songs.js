
var songPlaceHolder01 = "";
var songPlaceHolder02 = "";
    
function addMusicList2(data) {
   console.log(data.musicList2);
   	var counter = 4;
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

//ADD-MUSIC SECTION BUILT OUT
var buildForm = "<label>Song Name:</label>";
	buildForm += "<input type='text' id='song-input'>";
	buildForm += "<label>Artist:</label>";
	buildForm += "<input type='text' id='artist-input'>";
	buildForm += "<label>Album:</label>";
	buildForm += "<input type='text' id='album-input'>";
	buildForm += "<button id='add' class='add' >Add</button>";
	$("#add-view").html(buildForm); 

//this is Add Music view
$("#link-add").click(function() {
	$("#music-view").addClass("hidden");
	$("#music-view").removeClass("visible");
	$("#add-view").addClass("visible");
	$("#add-view").removeClass("hidden");

});
// this is landing page
$("#link-home").click(function() {
	$("#add-view").addClass("hidden");
	$("#add-view").removeClass("visible");
	$("#music-view").addClass("visible");
	$("#music-view").removeClass("hidden");
});


$("#signUp").click(function() {
	$("#login-view").addClass("hidden");
	$("#signUp-view").removeClass("hidden");
})

$(init);
function init() {
  $('.info').sortable();
}





