const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}

menu.className += ' vermelho';

console.log(menu.className);

// console.log(menu.classList.);

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

const adicionarAlt = img.setAttribute('alt', 'É uma Raposa');

const srcImg = img.getAttribute('alt');
// console.log(srcImg);

const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt);

const carro = {
  portas: 4,
  andar: (km) => {
    console.log(`Andou ${km}km`);
  }
}

carro.portas = 20
console.log(carro)