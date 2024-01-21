const userInput = document.getElementById("name-input");
const userName = document.getElementById('name-output');

const addName = () => {
    let enteredName = userInput.value.trim();
    userName.textContent = enteredName === "" ? "Anonymous" : enteredName;
    userName.style.color = "red";
}

userInput.addEventListener("input", addName);
