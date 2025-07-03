let inputValue;
do {
    inputValue = prompt("Enter a number (limit 100)");
    inputValue - parseInt(inputValue);
}   while (isNaN(inputValue) || inputValue < 0 || inputValue > 100);


const container = document.querySelector('.container');

for (let i = 0; i < (inputValue * inputValue) - inputValue; i++) {
  
    const box = document.createElement('div');
    container.appendChild(box);
 
    const selected = document.querySelectorAll(`.container div:nth-child(${inputValue}n)`);
 
selected.forEach(item => {
    item.style.width = '100%';
    item.style.border = '0';
    item.style.height = '0';
 });
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random number for Red (0-255)
  const g = Math.floor(Math.random() * 256); // Random number for Green (0-255)
  const b = Math.floor(Math.random() * 256); // Random number for Blue (0-255)
  return 'rgb(' + r + ',' + g + ',' + b + ')'; // Combine values into an RGB string
}
const randomRGB = getRandomColor();
    box.addEventListener('mouseover', function() {
    this.style.backgroundColor = randomRGB
    });

}