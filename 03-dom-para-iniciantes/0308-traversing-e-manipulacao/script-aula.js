const h1 = document.querySelector('h1')
h1.innerHTML = '<p>Novo Titulo</p>'
h1.innerText = '<p>Novo Titulo</p>'

const lista = document.querySelector('.animais-lista')
//TRAVERSING = significa navegar pela dom utilizando suas propriedades e métodos
lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho
lista.querySelector('li:last-child'); // último filho
lista.querySelectorAll('li'); // todas as LI's

console.log(lista.firstChild) // primeiro node child
console.log(lista.childNodes) // todos os node child

const animaisDescricao = document.querySelector('.animais-descricao')
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const lastDD = document.querySelector('.faq-lista dd:last-child');
contato.insertBefore(lastDD, titulo)

const imgUrso = document.querySelector('img[src^="img/imagem3"]')
const cloneImageUrso = imgUrso.cloneNode(imgUrso)
const descriptionAnimaisUrso = animaisDescricao.querySelector('section:nth-child(3)')
descriptionAnimaisUrso.appendChild(cloneImageUrso)

const dadosContato = document.querySelector('.dados')
const rua = document.querySelector('.dados li:nth-child(3)')

const terceiroDT = document.querySelector('.faq-lista dt:nth-child(5)')
dadosContato.replaceChild(terceiroDT, rua)

const novoH1 = document.createElement('h1')
novoH1.innerText = 'Novo titulo'
novoH1.classList.add('titulo')

const sectionAnimais = document.querySelector('.animais')
const tituloAnimais = sectionAnimais.querySelector('h1')

sectionAnimais.replaceChild(novoH1, tituloAnimais)

const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)
faq.appendChild(cloneH1)