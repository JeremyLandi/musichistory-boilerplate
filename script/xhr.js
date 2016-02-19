$(document).ready(function() {
  $.ajax({
    url:"JSON/musicList1.json"
  }).done(function(data) {
  	addMusicList1(data);
	});

	$(document).on('click', '.moreSongs', function() {
		console.log("check check");
		$.ajax({
	    url:"JSON/musicList2.json"
	  }).done(function(data) {
	  	addMusicList2(data);
	  	$(".moreSongs").remove();
	  });
	})

	$(document).on('click','.deleteButton', function() {
		// console.log(this);
	this.parentNode.remove();
	})
})
