// // Initial array of cities 
// var cities = ["Atlanta", "New York", "Chicago", "Seattle", "Portland"];

// function displayWeatherInfo() {

//     var city = $(this).attr("data-name")

$("#add-city").on("click", function () {
    var cityInput = $("#city-input").val();
    console.log(cityInput);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=a60331e4836efdb06b3c7c76a4b019e8";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       
        var cityDiv = $("<div class='city'>");

        var temperature = response.Temp;

        var pOne = $("<p>").text("Temperature: " + temperature);

        cityDiv.append(pOne);

        $("#city-section").append($(cityDiv));
       
    });
    
});