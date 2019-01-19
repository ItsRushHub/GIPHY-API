// My array of actors and actresses
var actorsArray = ["Will Smith", "Denzel Washington", "Sanaa Lathan", "Kerry Washington", "Jamie Foxx", "Meagan Good", "Gabrielle Union", "Don Cheadle", "Idris Elba", "Taraji P. Henson"];

var topics = "";
    
// Get the gifs to animate, still and play again
    $(document).on("click", ".actor-image", function() {

        var state = $(this).attr("data-state");

        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        }
        else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        }
    });


// When you click on a gif button the giphys show up
$("button[data-still]").on("click", function() {
    var person = $(this).attr("data-still");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=svAHRzuiCCv7R8Ek8WHJIt8nphDzAa1R";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

// My for loop that appends a button for each string in the array
    .then(function(response) {
        var results = response.data;


        for (var i = 0; i < actorsArray.length; i++) {
            var gifDiv = $("<div>");

            // The ratings for the gifs
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);


            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            var animated = results[i].images.fixed_height.url;
            var still = results[i].images.fixed_height_still.url;

            personImage.attr("src", still);
            personImage.attr("data-still", still);
            personImage.attr("data-animate", animated);
            personImage.attr("data-state", "still");
            personImage.addClass("actor-image");


            // Get the new gif to populate to the top
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);

        }
    });
});


// Function for the input and submit

    $("#addPerson").on("click", function(e) {
        var addPerson = $("#actoractress").val()
        e.preventDefault();
        
        
        console.log("addPerson")

        var button = $("<button>").text($("#actoractress").val());
        $("#buttons").append(button);  

        actorsArray.push(addPerson);
        console.log("actorsArray")
    });



    
    