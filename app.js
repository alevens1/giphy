
 
   var topics = ["Neil DeGrasse Tyson", "Bill Nye", "plants", "marine", "funny", "astronauts", "animals", "microscopic", "anatomy", "space"];

      function displayGif() {


		var neil = $.get("https://api.giphy.com/v1/gifs/search?q=neil+degrasse+tyson&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); 
		var billnye = $.get("https://api.giphy.com/v1/gifs/search?q=bill+nye&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var space = $.get("https://api.giphy.com/v1/gifs/search?q=space&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var anatomy = $.get("https://api.giphy.com/v1/gifs/search?q=anatomy&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var microscopic = $.get("https://api.giphy.com/v1/gifs/search?q=bacteria&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var animals = $.get("https://api.giphy.com/v1/gifs/search?q=animals&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var astronauts = $.get("https://api.giphy.com/v1/gifs/search?q=astronaut&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var funny = $.get("https://api.giphy.com/v1/gifs/search?q=science&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var marine = $.get("https://api.giphy.com/v1/gifs/search?q=ocean&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });
		var plants = $.get("https://api.giphy.com/v1/gifs/search?q=plants&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10");
		xhr.done(function(data) {console.log("success", data); });

        // var gif = $(this).attr("data");
        // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + data + "&api_key=de0e9c93a3b04e599469fb352aa1fdc8&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          var gifDiv = $("<div class='gif-view'>");

          var rating = response.Rated;

          var displayRating = $("<p>").text("Rating: " + rating);

          gifDiv.append(displayRating);

        });

      });

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {

          var a = $("<buttons>");
          a.addClass("gif");
          a.attr("data", topics[i]);
          a.text(topics[i]);
          $("#buttons-view").append(a);
        }
      }

      $("#add-gif").on("click", function(event) {
        event.preventDefault();
        var topics = $("#gif-input").val().trim();

        topics.push(gif);

        renderButtons();
      });

      $(document).on("click", ".gif", displayGif);

      renderButtons();

 }