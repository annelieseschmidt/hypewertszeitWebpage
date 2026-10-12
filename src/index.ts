import shootingImg from "./assets/pictures/2024/shooting/2024_shooting_IMG_7015.jpg";

const image = document.getElementById("shootingImage") as HTMLImageElement;
image.src = shootingImg;

const button = document.getElementById("testButton");
const message = document.getElementById("message");

button?.addEventListener("click", () => {
    if (message) {
        message.textContent = "JavaScript funktioniert!";
    }
});
