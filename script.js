$("#add-city").on("click", function () {
    event.preventDefault();
    var cityInput = $("#city-input").val();
    console.log(cityInput);

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=a60331e4836efdb06b3c7c76a4b019e8";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
       console.log(response);

        var cityDiv = $("<div class='city'>");

        var cityName = response.name;

        var list = $("<h6>").text(cityName);

        cityDiv.append(list);

        $("#city-section").append(cityDiv);

        // Code for city name

        var currentDiv = $("<div class='current'>");

        var currentCity = response.name;

        var header = $("<h5>").text(currentCity);

        currentDiv.append(header);

        $("#city-title").append(currentDiv);

        // Code for current date

        var currentDate = new Date();

        var month = currentDate.getMonth()+1;
        var day = currentDate.getDate();
        
        var output = '(' + month + '/' + day + '/' + currentDate.getFullYear() + ')';
        
        console.log(output);

        $("#city-title").append(output);

        // Code for city temperature 

        var temperatureDiv = $("<div class='temperature'>");
        
        var temperature = response.main.temp;

        var pOne = $("<p>").text("Temperature: " + temperature);

        temperatureDiv.append(pOne);

        $("#city-weather").append(temperatureDiv);
       
        // Code for city humidity

        var humidityDiv = $("<div class='humidity'>");
        
        var humidity = response.main.humidity;

        var pTwo = $("<p>").text("Humidity: " + humidity);

        humidityDiv.append(pTwo);

        $("#city-weather").append(humidityDiv);

        // Code for city wind speed

        var windspeedDiv = $("<div class='windspeed'>");
        
        var windspeed = response.wind.speed;

        var pThree = $("<p>").text("Wind Speed: " + windspeed);

        windspeedDiv.append(pThree);

        $("#city-weather").append(windspeedDiv);
    });
    
});