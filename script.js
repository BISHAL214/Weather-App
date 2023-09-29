const apiKey = "ce4f2453644ef6366e108ff5270f9b04";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBg = document.querySelector("#weather-video")
const weatherBg2 = document.querySelector("#weather-video-2")
const weatherBg3 = document.querySelector("#weather-video-3")
const weatherBg4 = document.querySelector("#weather-video-4")
const weatherBg5 = document.querySelector("#weather-video-5")
const weatherBg6 = document.querySelector("#weather-video-6")
const weatherBg7 = document.querySelector("#weather-video-7")
const weatherName = document.querySelector('.weather-name')



async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector('.feeltemp').innerHTML = data.main.feels_like + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    document.querySelector('.temp-max').innerHTML = data.main.temp_max + "°C";
    document.querySelector('.temp-min').innerHTML = data.main.temp_min + "°C";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "Clouds.png";
        weatherBg2.style.display = "block"
        weatherBg.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg4.style.display = "none"
        weatherBg5.style.display = "none"
        weatherBg6.style.display = "none"
        weatherBg7.style.display = "none"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "Clear.png";
        weatherBg4.style.display = "block"
        weatherBg.style.display = "none"
        weatherBg2.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg5.style.display = "none"
        weatherBg6.style.display = "none"
        weatherBg7.style.display = "none"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Rain" ) {
        weatherIcon.src = "rain-1.png"
        weatherBg.style.display = "block"
        weatherBg2.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg4.style.display = "none"
        weatherBg5.style.display = "none"
        weatherBg6.style.display = "none"
        weatherBg7.style.display = "none"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Snow") {
        weatherIcon.src = "Snow.png";
        weatherBg.style.display = "none"
        weatherBg2.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg4.style.display = "none"
        weatherBg5.style.display = "block"
        weatherBg6.style.display = "none"
        weatherBg7.style.display = "none"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Drizzling") {
        weatherIcon.src = "Drizzle.png";
        weatherBg.style.display = "none"
        weatherBg2.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg4.style.display = "none"
        weatherBg5.style.display = "none"
        weatherBg6.style.display = "block"
        weatherBg7.style.display = "none"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "Mist.png";
        weatherBg.style.display = "none"
        weatherBg2.style.display = "none"
        weatherBg3.style.display = "none"
        weatherBg4.style.display = "none"
        weatherBg5.style.display = "none"
        weatherBg6.style.display = "none"
        weatherBg7.style.display = "block"
        weatherName.innerHTML = data.weather[0].main
    }


    else if(data.weather[0].main == "Haze") {
        weatherIcon.src = "Haze.png";
        weatherName.innerHTML = data.weather[0].main
        weatherBg3.style.display = "block"
        weatherBg.style.display = "none"
        weatherBg2.style.display = "none"
    }

    document.querySelector('.weather').style.display = "block";
}

searchBtn.addEventListener("click", function() {
    checkWeather(searchBox.value);
});
