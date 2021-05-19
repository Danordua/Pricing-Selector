const level = document.querySelector('#range');
const numPages = document.querySelector('.value-num');
const price = document.querySelector('.price-num');
const switchBtn = document.querySelector('#switch');
const text1 = document.querySelector('.text1');
const x = document.querySelector('.fas');

// cambia los numeros de pages
numPages.textContent = Number(level.value) * 100;
switchBtn.value = 'off';

switchBtn.addEventListener('click', () => {
    if(switchBtn.value == 'on') { 
        switchBtn.value = 'off';
        selectPack();
    }
    else {
        let numPrice = Number(price.textContent);
        switchBtn.value = 'on';
        price.textContent = numPrice - (numPrice * .25)
    }
})

level.addEventListener('input', selectPack);

function selectPack(){
    let priceNum = parseInt(price.textContent);
    if (level.value == 1) {
      numPages.textContent = Number(level.value) * 100;
      price.textContent = 0;
      level.style.background = '#D3EEF3';
      x.classList.remove('fa-check')
      x.classList.add('fa-times')
    }
    if (level.value == 2) {
      numPages.textContent = 500;
      price.textContent = 12;
      level.style.background = '#B0E9F4';
      x.classList.remove('fa-times')
      x.classList.add('fa-check')
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 3) {
      numPages.textContent = '1K';
      price.textContent = 16;
      level.style.background = '#88CBD7';
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 4) {
      numPages.textContent = '5K';
      price.textContent = 24;
      level.style.background = '#6FB9C6';
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
    if (level.value == 5) {
      numPages.textContent = '10K';
      price.textContent = 36;
      level.style.background = '#4196A6';
      if(switchBtn.value == 'on') price.textContent -= (price.textContent * .25)
    }
}
