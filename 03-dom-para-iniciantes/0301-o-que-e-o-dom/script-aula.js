// window.alert('Isso mesmo');

// const href = window.location.href;

// console.log(href);

// if(href === 'http://127.0.0.1:5500/o-que-e-o-doms/') {
//   console.log('É igual');
// }

const h1 = document.querySelector('h1')

function callback() {
  console.log('Clicou no', h1.innerText)
}

h1.addEventListener('click', callback)
