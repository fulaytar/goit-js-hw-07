const userInput = document.getElementById("name-input");
const userName = document.getElementById('name-output');

const addName = () => {
    let enterName = userInput.value.trim();
    let upperFirstLetterEnterName = "";
    if (enterName !== "") {
        upperFirstLetterEnterName= enterName[0].toUpperCase() + enterName.slice(1);
    }
    userName.textContent = upperFirstLetterEnterName === "" ? "Anonymous" : upperFirstLetterEnterName;
    userName.style.color = "red";
}

userInput.addEventListener("input", addName);
