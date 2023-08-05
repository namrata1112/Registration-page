document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = form.username.value;
        const email = form.email.value;

        alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
        form.reset();
    });
});
