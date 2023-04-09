const colorOne = document.getElementById('color-a');
const colorTwo = document.getElementById('color-b');
let currentDirection = 'to bottom';
const outputCode = document.getElementById('code');

function setDirection(value, _this) {
   const buttons = document.querySelectorAll('.buttons button');

   for (let i of buttons) {
      i.classList.remove('active');
   }
   _this.classList.add('active');

   currentDirection = value;
}

function generateCode() {
   outputCode.value = `background: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value});`;
   document.body.style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copyText() {
   outputCode.select()
   document.execCommand('copy');
   document.getElementById('copy').innerHTML = `<i class="fa-solid fa-check"></i>`;
}

generateCode();