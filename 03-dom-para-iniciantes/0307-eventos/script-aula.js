// const img = document.querySelector('img')

// function callback(event) {
//   const elementoClicado = event.currentTarget
//   console.log(elementoClicado)
//   const ondeCliqueiExatamente = event.target
//   console.log(ondeCliqueiExatamente)
// }

// img.addEventListener('click', callback)

// function callbackLista(event) {
//   console.log(event.currentTarget) // Esse está retornando a ul
//   console.log(event.target) // Esse está retornando a imagem (ponto exato do click)
//   console.log(event.type) // retorna um texto com nome do evento
// }

// const animaisLista = document.querySelector('.animais-lista')
// animaisLista.addEventListener('click', callbackLista)


// const linkExterno = document.querySelector('a[href^="https://"')

// function previnirComportamentoDefault(event) {
//   event.preventDefault()
//   console.log(this.getAttribute('href'))
//   console.log(event.currentTarget)
// }

// linkExterno.addEventListener('click', previnirComportamentoDefault)

// const h1 = document.querySelector('h1')

// function handleEvent(event) {
//   switch(event.key) {
//     case 'a': return h1.classList.toggle('azul')
//     case 'v': return document.body.classList.toggle('vermelho')
//   }
// }

// const keyboard = window.addEventListener('keydown', handleEvent)

const paragraph = document.querySelectorAll('p')
console.log(paragraph[--paragraph.length])




