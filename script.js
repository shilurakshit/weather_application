
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4c1a3690e3mshefd581fe58c7501p16c701jsn9a0de2c1552d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity 
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

search.addEventListener("click", (e) => {
    // for not reloading page
    e.preventDefault()
    getWeather(city.value)
})


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gandhinagar', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempG.innerHTML = response.temp
            feels_likeG.innerHTML = response.feels_like
            humidityG.innerHTML = response.humidity
            min_tempG.innerHTML = response.min_temp
            max_tempG.innerHTML = response.max_temp
            wind_speedG.innerHTML = response.wind_speed
            wind_degreesG.innerHTML = response.wind_degrees
            sunriseG.innerHTML = response.sunrise
            sunsetG.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempA.innerHTML = response.temp
            feels_likeA.innerHTML = response.feels_like
            humidityA.innerHTML = response.humidity
            min_tempA.innerHTML = response.min_temp
            max_tempA.innerHTML = response.max_temp
            wind_speedA.innerHTML = response.wind_speed
            wind_degreesA.innerHTML = response.wind_degrees
            sunriseA.innerHTML = response.sunrise
            sunsetA.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Junagadh', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempJ.innerHTML = response.temp
            feels_likeJ.innerHTML = response.feels_like
            humidityJ.innerHTML = response.humidity
            min_tempJ.innerHTML = response.min_temp
            max_tempJ.innerHTML = response.max_temp
            wind_speedJ.innerHTML = response.wind_speed
            wind_degreesJ.innerHTML = response.wind_degrees
            sunriseJ.innerHTML = response.sunrise
            sunsetJ.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Surat', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            tempS.innerHTML = response.temp
            feels_likeS.innerHTML = response.feels_like
            humidityS.innerHTML = response.humidity
            min_tempS.innerHTML = response.min_temp
            max_tempS.innerHTML = response.max_temp
            wind_speedS.innerHTML = response.wind_speed
            wind_degreesS.innerHTML = response.wind_degrees
            sunriseS.innerHTML = response.sunrise
            sunsetS.innerHTML = response.sunset
        })
        .catch(err => console.error(err));


