const eyeIcon = document.querySelector("#eye-icon");
const inputPassword = document.querySelector("#password-input");

eyeIcon.addEventListener("mousedown", () => {
    inputPassword.setAttribute("type","text");
});

eyeIcon.addEventListener("mouseup", () => {
    inputPassword.setAttribute("type","password");
});