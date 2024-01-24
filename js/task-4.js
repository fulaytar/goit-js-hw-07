const loginForm = document.querySelector(".login-form");
const userAccount = {
    email: "",
    password:"",
}
function dataVerification(event) {
    event.preventDefault(); //скасував обновлення сторінки
    const form = event.target; //беру доступ до форми
    const email = form.elements.email.value.trim();
    
    if (email === "") {
    return  alert('All form fields must be filled in')
    } else {
        userAccount.email = email;
    }
    const password = form.elements.password.value.trim();
    
    if (password === "") {
        return alert('All form fields must be filled in')
    } else {
        userAccount.password = password;
    }
    console.log(userAccount);
    form.reset();
}


loginForm.addEventListener("submit", dataVerification)