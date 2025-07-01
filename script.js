const container = document.querySelector('.container');

const inputWidth = prompt("Enter width");


for (let i = 0; i < (inputWidth * inputWidth) - inputWidth; i++) {
  
    const box = document.createElement('div');
    container.appendChild(box);
 
    const selected = document.querySelectorAll(`.container div:nth-child(${inputWidth}n)`);
 
selected.forEach(item => {
    item.style.width = '100%';
    item.style.border = '0';
    item.style.height = '0';
 });

    box.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
    });

}