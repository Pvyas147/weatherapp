const searchbox = document.querySelector(".search-box");
const search = document.querySelector(".submit");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const form = document.querySelector("#searchbox");
const weather_img = document.querySelector("img");



form.addEventListener('submit', fetchData);

async function fetchData(e) {
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=7e89e6bbd7acdfa8e52eb64861abef97&query=${searchbox.value}`)
    let data = await response.json()

if (data.success === false) {
    window.alert("Enter Real City Name")
} else {
   
    let tempData = data.current.temperature
    let cityName = data.location.name
    let description = data.current.weather_descriptions
    let weather_icon = data.current.weather_icons[0]
    let time = data.location.localtime

    temp.innerText =`${tempData}°c`
    city.innerText = cityName
    weather.innerText = description
    weather_img.setAttribute("src", weather_icon)
    date.innerText = time


}
console.log(data)
form.reset()

}