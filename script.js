document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to The Food Dude!");

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing The Food Dude! Redirecting to WhatsApp...");
        });
    }
});
