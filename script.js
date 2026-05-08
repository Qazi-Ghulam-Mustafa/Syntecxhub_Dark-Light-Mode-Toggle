const toggleBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("change", () => {

    if (toggleBtn.checked) {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

});


/* MOBILE NAVBAR TOGGLE */

const menuToggle = document.querySelector("#menu-toggle");

const navLinks = document.querySelector("#nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});