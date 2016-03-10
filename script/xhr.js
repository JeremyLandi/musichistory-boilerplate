	"use strict";
$(document).ready(function() {

	function getSongs() {
		$.ajax({
			//.json is telling it to return as JSON
			url:"https://music-history-landi.firebaseio.com/songs/.json",
			method: "GET"
		}).done(function (songList) {
			// let songEl = $("#songPlaceHolder");

			// Object.keys(songList).forEach((key) => {
			// 	songList[key]
			// })

			// OR
			//RESETTING SO NEW SONG INFO ISN'T APPENDED
			$("#info").html("");
			songPlaceHolder01 = "";
			//interates over object's keys
			for (let keyName in songList) {
				//evaluates to songList.weep, songList.heaven, etc
				var currentSong = songList[keyName];

				songPlaceHolder01 += `<div id= "${keyName}" class='song'>`;
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
		})
	}
	

	$(document).on('click', '.moreSongs', function() {
		$.ajax({
	    url:"JSON/musicList2.json"
	  }).done(function(data) {
	  	addMusicList2(data);
	  	$(".moreSongs").remove();
	  });
	});

	$("#add").click(function(e) {
		var newSong = {
			"name": $("#song-input").val(),
			"artist": $("#artist-input").val(),
			"album": $("#album-input").val()
		}
		$.ajax({
			url: "https://music-history-landi.firebaseio.com/songs/.json",
			method: "POST",
			data: JSON.stringify(newSong)
		}).done(function() {
			// var counter = 8;
			var string = $("#song-input").val();
			var artistString = $("#song-input").val();
			var albumString = $("#album-input").val();
			
			var addedSong = "";
			addedSong += "<div class='song'>";
			addedSong += "<button class='deleteButton'>Delete</button>";
			addedSong += "<h2>" + string + "</h2>";	
			addedSong += "<ul>";
			addedSong += "<li>" + artistString + "</li>";	
			addedSong += "<li>" + albumString + "</li>";	
			addedSong += "</ul>";	
			addedSong += "</div>";	
			$('#info').prepend(addedSong);

			$("#song-input").val("");
			$("#artist-input").val(""); 
			$("#album-input").val("");
			console.log("Your new song is: ", addedSong);
			getSongs();
		});
	})

	$(document).on('click','.deleteButton', function() {
		// console.log(this.parentNode.id);
		this.parentNode.remove();
		$.ajax({
			url: `https://music-history-landi.firebaseio.com/songs/${this.parentNode.id}/.json`,
			method: "DELETE"			
		}).done(function() {			
			console.log("success");
		});
	});	


	// CREATING NEW USER
	$("#signUpButton").click(function(e) {
		e.preventDefault();
		var newUserEmail = $("#inputUsernameEmailSignUp").val();
		var newUserPassword = $("#inputPasswordSignUp").val();

		var ref = new Firebase("https://music-history-landi.firebaseio.com/songs");
		ref.createUser({
		  email    : newUserEmail,
		  password : newUserPassword
		},function(error, userData) {
		  if (error) {
	    console.log("Error creating user:", error);
	 	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	      //hide login 
	  	$("#signUp-view").addClass("hidden");

	  	//get data on page
	  	getSongs();

	  	//show page
	  	$("#nav-view").removeClass("hidden");
	  	$("#music-view").removeClass("hidden");
	  	$("#info").removeClass("hidden");

	  	}
		});
	});
		

	// LOGGIN IN USER
	$("#logInButton").click(function(e) {
		e.preventDefault();
		var email = $("#inputUsernameEmail").val();
		var password = $("#inputPassword").val();

		var ref = new Firebase("https://music-history-landi.firebaseio.com/songs");
		ref.authWithPassword({
		  email    : email,
		  password : password
		}, function(error, authData) {
		  if (error) {
		    console.log("Login Failed!", error);
		  } else {
		    console.log("Authenticated successfully with payload:", authData);
		  }
		},{remember: "sessionOnly"});
		
	});	


	// // DELETEING USER
	// var ref = new Firebase("https://music-history-landi.firebaseio.com/songs");
	// ref.removeUser({
	//   email    : "bobtony@firebase.com",
	//   password : "correcthorsebatterystaple"
	// }, function(error) {
	//   if (error === null) {
	//     console.log("User removed successfully");
	//   } else {
	//     console.log("Error removing user:", error);
	//   }
	// });


	// Create a callback which logs the current auth state
	function authDataCallback(authData) {
	console.log("authData", authData);
	  if (authData) {
	  	//hide login 
	  	$("#login-view").addClass("hidden");

	  	//get data on page
	  	getSongs();

	  	//show page
	  	$("#nav-view").removeClass("hidden");
	  	$("#music-view").removeClass("hidden");
	  	$("#info").removeClass("hidden");
	   
	  } else {
	    console.log("User is logged out");
	  }
	}
	// Register the callback to be fired every time auth state changes
	var ref = new Firebase("https://music-history-landi.firebaseio.com/songs");
	ref.onAuth(authDataCallback);

	// LOG OUT
	$(".logout").click(function() {
		ref.unauth();
		$("#login-view").removeClass("hidden");
		$("#nav-view").addClass("hidden");
  	$("#music-view").addClass("hidden");
  	$("#info").addClass("hidden");
	})

});




