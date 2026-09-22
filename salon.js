// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


// =========================
// BOOKING FORM
// =========================

const bookingForm = document.querySelector(".booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = bookingForm.querySelector(
        'input[type="text"]'
    ).value;

    const service = bookingForm.querySelector(
        "select"
    ).value;

    alert(
        `Thank you, ${name}! ✨\n\n` +
        `Your ${service} appointment request has been received.\n\n` +
        "Our team will contact you shortly."
    );

    bookingForm.reset();
});

