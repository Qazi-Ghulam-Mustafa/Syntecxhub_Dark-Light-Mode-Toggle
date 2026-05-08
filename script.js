const toggleBtn = document.querySelector("#checkbox");

toggleBtn.addEventListener("change", () => {

    if (toggleBtn.checked) {

        document.body.classList.add("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

});