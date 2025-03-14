//key:e3c1f60f0ed74fa0b0a140506251203
//url:http://api.weatherapi.com/v1/current.json?key=e3c1f60f0ed74fa0b0a140506251203&q=kenya&aqi=no
// kenya&aqi=no
const searchweather = "http://api.weatherapi.com/v1/current.json?key=e3c1f60f0ed74fa0b0a140506251203&q=";

const inpute = document.getElementById("inpute");
const btnlocation = document.getElementById("btn-location");

btnlocation.addEventListener('click', addweatherinfo);

function addweatherinfo() {
    fetch(searchweather + inpute.value)
    .then(response => response.json())
    .then(data => {
        const chats = document.getElementById('chats');
        const chat123 = chats.querySelectorAll(".chat123");
        
        chat123.forEach((chat, index) => {
            chat.innerHTML = `
                <h1>${data.location.country}</h1>
                <h2>${data.current.humidity}</h2>
                <h3>${data.current.temp_c}°</h3>
            `;
        });
    })
    .catch(error => {
        console.log("Error:", error);
    });
}

