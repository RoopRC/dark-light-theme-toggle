var body = document.body;
var button = document.getElementById("btn");

button.onclick = function () {

    if (body.className === "light") {
        body.className = "dark";
    } else {
        body.className = "light";
    }

};