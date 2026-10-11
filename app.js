// user prompt section
document.getElementById("go-button").addEventListener("click", function() {
    let userprompt = document.getElementById("user-prompt").value;
    // conditions
    if (userprompt === "Portfolio") {
        alert("I know I'm super cool but you have to wait for my portfolio. Sorry^-^");
    }
    else if (userprompt === "Aero OS") {
        alert("SUPER AWESOME VDE IN THE MAKING");
    }
    else {
        alert("Command not recognized! Please try 'Portfolio' or 'Aero OS'.");
    }
