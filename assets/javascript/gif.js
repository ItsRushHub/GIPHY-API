// My array of actors and actresses

var actorsArray = ["Will Smith", "Denzel Washington", "Sanaa Lathan", "Kerry Washington", "Jamie Foxx", "Meagan Good", "Gabrielle Union", "Don Cheadle", "Idris Elba", "Taraji P. Henson"];

var topics = [];

// When you click on a gif button the giphys show up
$("button[data-person]").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=svAHRzuiCCv7R8Ek8WHJIt8nphDzAa1R";

    $.ajax({
    url: queryURL,
    method: "GET"
    })

// My for loop that appends a button for each string in the array

    for (var i = 0; i < actorsArray.length; i++) {
        var gifDiv = $("<div>");
    }













