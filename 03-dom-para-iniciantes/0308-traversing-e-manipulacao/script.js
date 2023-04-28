// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const menuClone = menu.cloneNode(true)

const copy = document.querySelector('.copy')
copy.appendChild(menuClone)

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector('.faq-lista dt:first-child')
// console.log(firstDT)

// Selecione o DD referente ao primeiro DT
const firstDD = document.querySelector('.faq-lista dd')
// console.log(firstDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animaisLista = document.querySelector('.animais-lista')
const faq = document.querySelector('#faq')
const faqContent = faq.querySelector('.faq-lista')

faq.replaceChild(animaisLista, faqContent)
