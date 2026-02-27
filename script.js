const body = document.body;
const button = document.getElementById("toggleBtn");

// Apply saved theme when page loads
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
} else {
    body.classList.add("light");
}

button.addEventListener("click", function () {

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light");
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }

});