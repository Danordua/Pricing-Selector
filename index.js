const level = document.querySelector('#range');
const numPages = document.querySelector('.value-num');
const price = document.querySelector('.price-num');

numPages.textContent = level.value;

level.oninput = function(){
    numPages.textContent = this.value;
};

if(this.value > 100 && this.value < 200) price.textContent = '10';
    if(this.value > 200 && this.value < 300) price.textContent = '10';

