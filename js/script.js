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

function btn1() {
    swal({
        title: "로그인 성공!",
        icon: "success",
    });
}

function btn2() {
    swal({
        title: "회원가입 성공!",
        text: "회원가입에 축하드립니다.",
        icon: "success",
        button: "success",
    });
}

function btn3() {
    swal({
        title: "이메일 입력 성공!",
        icon: "success",
    });

}
//local storage 
// <!--Resister start부분-->
let sendbtn = document.getElementById('send');
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

sendbtn.addEventListener('click', (e) => {
    // 성 localstorage
    let firstname = document.getElementById('firstname');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');
    let address = document.getElementById('address');
    let phone = document.getElementById('phone');

    firstname = firstname.value;
    localStorage.setItem('firstname', firstname);
    name = name.value;
    localStorage.setItem('name', name);
    email = email.value;
    localStorage.setItem('email', email);
    pwd = pwd.value;
    localStorage.setItem('pwd', pwd);
    address = address.value;
    localStorage.setItem('address', address);
    phone = phone.value;
    localStorage.setItem('phone', phone);
});
//    login start부분
let lobtn = document.getElementById('lobtn');
let formlo = document.getElementById('formlo');
formlo.addEventListener('submit', (e) => {
    e.preventDefault();
});

lobtn.addEventListener('click', (e) => {

    let userId = document.getElementById('userId');
    let pwd1 = document.getElementById('pwd1');

    userId = userId.value;
    localStorage.setItem('userId', userId);
    pwd1 = pwd1.value;
    localStorage.setItem('pwd1', pwd1);
});
/**
 *  <!---비밀번호 잃어버린 부분-->
 */
let sendeamil = document.getElementById('sendemail');
let pwform = document.getElementById('pwform');

pwform.addEventListener('submit', (e) => {
    e.preventDefault();
});
sendeamil.addEventListener('click', (e) => {

    let email1 = document.getElementById('email1');
    email1 = email1.value;
    localStorage.setItem('email1', email1);
});