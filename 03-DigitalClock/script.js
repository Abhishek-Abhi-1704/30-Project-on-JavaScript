const days = [
    "Sunday","Monday","Tuesday",
    "Wednesday","Thursday","Friday","Saturday"
];

const months = [
    "January","February","March","April",
    "May","June","July","August",
    "September","October","November","December"
];

let current = () => {
    let currentTime = new Date();

    let hour = String(currentTime.getHours()).padStart(2, "0");
    let min = String(currentTime.getMinutes()).padStart(2, "0");
    let sec = String(currentTime.getSeconds()).padStart(2, "0");
    let date = String(currentTime.getDate()).padStart(2, "0");
    let day = days[currentTime.getDay()];
    let month = months[currentTime.getMonth()];
    let year = String(currentTime.getFullYear())

    let ampm = hour >= 12 ? "PM" : "AM";

  document.getElementById("clock").innerHTML =
`${hour}:${min}:${sec} ${ampm}<br>${day}, ${month} ${date}, ${year}`;;
};

current();
setInterval(current, 1000);