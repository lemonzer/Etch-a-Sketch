const container = document.querySelector('.container');

const inputWidth = prompt("Enter width");


for (let i = 0; i < (inputWidth * inputWidth) - inputWidth; i++) {
  
    const box = document.createElement('div');
    container.appendChild(box);
  
    

    box.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'blue';
});
}


