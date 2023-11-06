
const apiUrl = 'https://restcountries.com/v3.1/all';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${p}&appid=0d82c1105cbc8438e7fc8f4ff1db281f`

function search() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            for (let x of data) {
                if (x.name.common.toLowerCase() === document.getElementById("inputCountry").value.toLowerCase()) {
                    // Set values in DOM elements here
                    document.getElementById("Capital").innerHTML = `Capital: ${x.capital}`
                    document.getElementById("Region").innerHTML = `Region: ${x.region}`
                    document.getElementById("Country").innerHTML = x.name.common

                    document.getElementById("Flag").innerHTML = `Flag: ${x.flag}`
                    document.getElementById("Codes").innerHTML = `Code: ${x.cca3}`
                    document.getElementById("flagImage").src = x.flags.png

                    // Set the city value

                }
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

        document.getElementById("Data").style.display = "block"
}

function checkWeather() {

    var p = document.getElementById("inputCountry").value
    if (!p) {
        alert("Please enter a valid country name.");
        return;
    }
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${p}&appid=0d82c1105cbc8438e7fc8f4ff1db281f`
    fetch(weatherUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            var temp = (data.main.temp - 273.15).toFixed(2) + "℃"
            var humidity = data.main.humidity + "%"
            var weather = data.weather[0].main

            alert(`Temp: ${temp} Humidity: ${humidity} Weather: ${weather}`)
        })
        .catch(error => {

            console.error('Fetch error:', error);
        });



}
