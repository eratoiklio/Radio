require('../scss/style.scss');

document.addEventListener('DOMContentLoaded', function() {
    console.log("script loaded");
    const stations = document.querySelectorAll(".shortcut");
    let currentStation;
    stations.forEach(function(element, index) {
        element.onclick = function() {

            console.log(this.parentNode);
            if (currentStation != undefined) {
                currentStation.classList.add("hidden");
            }
            currentStation = this.parentNode.querySelector(".extended");
            const name = this.parentNode.querySelector(".stationName").innerText;
            currentStation.classList.remove("hidden");
            document.querySelector(".currentStationName").innerText=name;
        }
    });

});
