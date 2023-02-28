setInterval(function () {
  let honoluluElement = document.querySelector("#honolulu");
  let berlinElement = document.querySelector("#berlin");
  let tokyoElement = document.querySelector("#tokyo");

  formatCityTime(honoluluElement, "Pacific/Honolulu");
  formatCityTime(berlinElement, "Europe/Berlin");
  formatCityTime(tokyoElement, "Asia/Tokyo");
}, 1000);

function formatCityTime(mainElemnt, timezone) {
  let cildDateElement = mainElemnt.querySelector(".date");
  let cildTimeElement = mainElemnt.querySelector(".time");

  let time = moment().tz(timezone);
  cildDateElement.innerHTML = time.format("MMMM Do YYYY");
  cildTimeElement.innerHTML = time.format("H:mm:ss[<small>]A[</small>]");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">Back to all cities</a> 
        `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
