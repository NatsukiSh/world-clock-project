setInterval(function () {
  let cityElement = document.querySelector(".city");
  if (cityElement) {
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let differentTimeZone = moment()
      .tz("Pacific/Honolulu")
      .tz("Europe/Berlin")
      .tz("Asia/Tokyo");

    dateElement.innerHTML = moment().format("MMMM Do YYYY");

    timeElement.innerHTML = differentTimeZone.format(
      "H:mm:ss[<small>]A[</small>]"
    );
  }
}, 1000);

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
