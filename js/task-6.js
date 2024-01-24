function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//відловив інпут
const inputNumber = document.querySelector("input");
//відловив бокс
const itemsBox = document.getElementById("boxes");
//відловив кнопку Створити
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');


//======Функція створює бокси від 1 до 100====
function createBoxes() {
  //Отримую значення інпута
  let amount = inputNumber.value;
  const verifyLastBox = document.getElementsByClassName("item_box");
  //удаляю наявні блоки
  if ( verifyLastBox.length> 0&&amount>=1&&amount<=100) {
    destroyBoxes();
  }
  //створюю блоки із властивостями
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++){
      let box = document.createElement("div");
      itemsBox.style.padding = "32px";
      box.classList.add("item_box");
      box.textContent = `${i + 1}`
      box.style.display = "flex";
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
      box.style.fontSize = `${16 + i}px`;
      box.style.color="white"
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30+(i*10)}px`;
      box.style.height = `${30+(i*10)}px`;
      itemsBox.append(box);
    } 
  }
  //Очистка інпута
  inputNumber.value = "";
}


//======функція видаляє бокси=====
function destroyBoxes() {
  // Перевіряємо, чи itemsBox існує
  if (itemsBox) {
    // Очищаємо вміст itemsBox
    itemsBox.innerHTML = "";
    itemsBox.style.padding = "0";
  }
}

//======Навішав подію на кнопку create====
buttonCreate.addEventListener("click", createBoxes);

//======Навішав подію на кнопку destroy====
buttonDestroy.addEventListener("click", destroyBoxes);
