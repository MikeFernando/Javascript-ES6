// Adicione a classe ativo a todos os itens do menu
const adicionarAtivoTodosMenu = document.querySelectorAll('.menu a')

adicionarAtivoTodosMenu.forEach(link => {
  link.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const linksMenu = document.querySelectorAll('.menu a')
linksMenu.forEach(link => {
  link.classList.remove('ativo')
  linksMenu[0].classList.add('ativo')
});

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img')

imgs.forEach(img => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(possuiAtributo)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]')
linkExterno.setAttribute('href', 'https://my-portfolio-git-main-mikefernando.vercel.app/')
console.log(linkExterno)