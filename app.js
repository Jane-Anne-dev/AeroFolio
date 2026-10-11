// user prompt section
document.getElementById("go-button").addEventListener("click", function() {
    let userprompt = document.getElementById("user-prompt").value;
    // conditions
    if (userprompt === "Portfolio") {
        document.querySelector(".aerofolio-welcome-page").style.display = "none";
        document.getElementById("portfolio-workspace").style.display = "block";    }
    else if (userprompt === "Aero OS") {
        document.querySelector(".aerofolio-welcome-page").style.display = "none";
        document.getElementById("os-workspace").style.display = "block";
    }
    else {
        alert("Command not recognized! Please try 'Portfolio' or 'Aero OS'.");
    }
}
)