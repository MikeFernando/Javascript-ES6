const section = document.querySelector('.animais-lista')
// console.log(section)

const alturaSemScroll = section.clientHeight
const alturacomScroll = section.scrollHeight
// console.log(alturaSemScroll)
// console.log(alturacomScroll)

const listaAnimais = document.querySelector('.animais-lista')
const distanciaAnimaisTopo = listaAnimais.offsetTop
// console.log(distanciaAnimaisTopo)

const h2 = document.querySelector('h2')
const rect = h2.getBoundingClientRect()

const small = window.matchMedia('(max-width: 600px)').matches

if (small) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
