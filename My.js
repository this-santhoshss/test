// Get the elements
const navBtn = document.getElementById("navBtn");
const navMenu = document.getElementById("navMenu");
const dimmingOverlay = document.querySelector(".dimmingOverlay");

// Function to toggle the mobile menu and dimming overlay
function toggleMobileMenu() {
    navMenu.classList.toggle("active");           // Toggle the 'active' class on the mobile menu
    dimmingOverlay.classList.toggle("active");   // Toggle the 'active' class on the dimming overlay
}

// Function to close the mobile menu
function closeMobileMenu() {
    navMenu.classList.remove("active");           // Remove 'active' class to hide the mobile menu
    dimmingOverlay.classList.remove("active");   // Remove 'active' class to hide the dimming overlay
}

//Control Mobile Menu
document.getElementById("navBtn").addEventListener("click", function() {
    document.getElementById("navMenu").classList.toggle("active");
    document.querySelector(".dimmingOverlay").classList.toggle("active");
});

document.querySelector(".dimmingOverlay").addEventListener("click", function() {
    document.getElementById("navMenu").classList.remove("active");
    document.querySelector(".dimmingOverlay").classList.remove("active");
});

// Event listener for the mobile menu button
navBtn.addEventListener("click", toggleMobileMenu);

// Event listener for the dimming overlay to close the mobile menu when clicked
dimmingOverlay.addEventListener("click", closeMobileMenu);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function validateForm() {
    let isValid = true;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageBox").value;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Message validation
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Get the button
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});






    