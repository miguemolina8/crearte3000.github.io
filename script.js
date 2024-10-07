document.addEventListener("DOMContentLoaded", () => {
    const subscriptionForm = document.getElementById("subscription-form");

    subscriptionForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value;

        if (validateEmail(email)) {
            alert(`¡Gracias por suscribirte, ${email}!`);
            emailInput.value = ""; // Limpiar el campo de entrada
        } else {
            alert("Por favor, introduce una dirección de correo electrónico válida.");
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

