// function displayWeatherInfo() {

//     var city = $(this).attr("data-name")

$("#add-city").on("click", function () {
    event.preventDefault();
    var cityInput = $("#city-input").val();
    console.log(cityInput);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=a60331e4836efdb06b3c7c76a4b019e8";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       
        var cityDiv = $("<div class='city'>");

        var cityName = response.name;

        var header = $("<h4>").text(cityName);

        cityDiv.append(header);

        $("#city-section").append(cityDiv);
       
       
        // var temperature = response.Temp;

        // var pOne = $("<p>").text("Temperature: " + temperature);

        // cityDiv.append(pOne);

        // $("#city-section").append(cityDiv);
       
    });
    
});

// Function for displaying city data
// function renderButtons() {
//     $("#buttons-view").empty();

// // Looping through the array of cities
// for (var i = 0; i < cities.length; i++) {

//     var a = $("<button>");
//           // Adding a class of city-btn to our button
//           a.addClass("city-btn");
//           // Adding a data-attribute
//           a.attr("data-name", cities[i]);
//           // Providing the initial button text
//           a.text(cities[i]);
//           // Adding the button to the buttons-view div
//           $("#buttons-view").append(a);
//         }
// }