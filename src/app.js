setInterval(function () {
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluDateElement = honoluluElement.querySelector(".date");
    let honoluluTimeElement = honoluluElement.querySelector(".time");
    let honoluluTime = moment().tz("America/New_York");

    honoluluDateElement.innerHTML = moment().format("MMMM Do YYYY");
    honoluluTimeElement.innerHTML = honoluluTime.format(
      "H:mm:ss[<small>]A[</small>]"
    );
  }

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/berlin");

    berlinDateElement.innerHTML = moment().format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss[<small>]A[</small>]"
    );
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/tokyo");

    tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss[<small>]A[</small>]"
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
