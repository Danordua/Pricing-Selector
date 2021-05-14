const level = document.querySelector('#range');
const numPages = document.querySelector('.value-num');
const price = document.querySelector('.price-num');
const switchBtn = document.querySelector('#switch');

// cambia los numeros de pages
numPages.textContent = level.value;
switchBtn.value = 'off';

// cambia los precios con descuento
switchBtn.addEventListener('click', () => {
    // combierte el precio (string) a un número
    const priceDis = Number(price.textContent);
    //dependiendo del valor del switch cambia el valor 
    if(switchBtn.value === "on") {
         switchBtn.value = "off";
         // lo revierte al valor original
         price.textContent = Math.floor(level.value / 10);
    }
    else {
        switchBtn.value = "on";
        //valor menos el descuento
        price.textContent = Math.floor(priceDis - (priceDis * 0.25));
    }
})

level.oninput = function(){
    numPages.textContent = this.value;
    price.textContent = Math.floor(this.value / 10);
    // cambia el valor si el switch está activado
    if(switchBtn.value == 'on') price.textContent = Math.floor((this.value / 10) - ((this.value / 10) * 0.25));
    if(this.value <= 100) price.textContent = 00;
};




