setInterval(getTime, 1000); // reload every 1s

function getTime() {
    document.getElementById("time").innerHTML = new Date();
}