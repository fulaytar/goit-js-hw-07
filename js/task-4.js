const registerForm = document.querySelector(".login-form");
const userAccount = {
    email: "",
    password:"",
}
function dataVerification(event) {
    event.preventDefault(); //скасував обновлення сторінки
    const form = event.target; //беру доступ до форми
    const email = form.elements.email.value.trim();
    
    if (email == "" || email.includes(" ")) {
    return  alert('All form fields must be filled in')
    } else {
        userAccount.email = email;
    }
    const password = form.elements.password.value;
    
    if (password == "" || password.includes(" ")) {
        return alert('All form fields must be filled in')
    } else {
        userAccount.password = password;
    }
    console.log(userAccount);
    form.reset();
}


registerForm.addEventListener("submit", dataVerification)