// By Jason
// Put the website's updated time here
const update = new Date("2025-03-17");
document.getElementById("lastUpdate").innerHTML = "<u>Last Updated:</u> " + update.toDateString();

// ----------------------------------------------------------------------------------------------
setInterval(getTime, 1000); // change every 1s

function getTime() {
    const time = new Date();
    document.getElementById("time").innerHTML = time;
}