let btn = document.getElementById("toggle")
const theme = document.querySelector('link[href="css/style.css"]');

btn.addEventListener("click", function() {
    // Check if the current theme is the light theme
    if (theme.getAttribute("href") == "css/style.css") {
        // If it's the light theme, switch to the dark theme
        theme.href = "css/dark-theme.css";
    } else {
        // If it's the dark theme, switch to the light theme
        theme.href = "css/style.css";
    }
});
