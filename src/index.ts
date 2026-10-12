
const button = document.getElementById("testButton");
const message = document.getElementById("message");

button?.addEventListener("click", () => {
    if (message) {
        message.textContent = "JavaScript funktioniert!";
    }
});
