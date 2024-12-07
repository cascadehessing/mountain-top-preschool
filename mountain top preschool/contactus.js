document.getElementById("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
        });

        if (response.ok) {
            alert("Thank you! Your submission has been sent.");
            form.reset(); // Clear the form fields
        } else {
            alert("There was an error submitting the form. Please try again later.");
        }
    } catch (error) {
        alert("Unable to connect. Please check your internet connection and try again.");
    }
});
