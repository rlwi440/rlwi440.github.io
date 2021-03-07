const loginBtn = document.querySelectorAll(".login-btn"),
    registerBtn = document.querySelectorAll(".register-btn"),
    lostpassBtn = document.querySelectorAll(".lost-pass-btn"),
    box = document.querySelector(".box"),
    formlogin = document.querySelector(".form-login"),
    formregister = document.querySelector(".form-register"),
    formlostpassword = document.querySelector(".form-lost-password");



registerBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        /**slide-active */
        box.classList.add("slide-active");
        formregister.classList.remove("form-hidden");
        formlogin.classList.add("form-hidden");
        formlostpassword.classList.add("form-hidden");
    });
});

loginBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        /**slide-active */
        box.classList.remove("slide-active");
        formregister.classList.add("form-hidden");
        formlogin.classList.remove("form-hidden");
        formlostpassword.classList.add("form-hidden");
    });
});

lostpassBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        /**slide-active */
        formregister.classList.add("form-hidden");
        formlogin.classList.add("form-hidden");
        formlostpassword.classList.remove("form-hidden");
    });
});