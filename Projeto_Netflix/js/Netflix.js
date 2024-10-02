var button = document.getElementById("botao");
var emailField = document.getElementById("email");

button.addEventListener("click", function () {
    if (emailField.value === "") {
        emailField.classList.add("shake");
        setTimeout(function () {
            emailField.classList.remove("shake");
        }, 500);  // Remove a animação após 0.5s (duração da animação)
    }
});