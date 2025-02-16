let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdesEle = document.getElementById("weather-desc");
let btnEle = document.getElementById("btn");
let icon = document.getElementById("icon");

const apiKey = "a24cbc7f94859e823cc37588936bd4c7";
btnEle.onclick = function () {
  if (inputEle.value == "") {
    alert("please enter some location");
  } else {
    loc = inputEle.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    fetch(url).then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];
        tempEle.innerText = Math.floor(feels_like - 273);
        locEle.innerText = name;
        weatherdesEle.innerText = description;
      })
      .catch(() => {
        alert("enter valid location");
      });
    inputEle.value = "";
  }
};
