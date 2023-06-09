// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado, e remova dos demais itens caso eles possuam a mesma. 
// Previna o comportamento padrão desses links
{ //RESPOSTA
  const linksInternos = document.querySelectorAll('a[href^="#"]')

  function handleToggleActiveClass(event) {
    event.preventDefault()

    linksInternos.forEach(link => link.classList.remove('ativo'))
    this.classList.add('ativo')
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', handleToggleActiveClass)
  })
}

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
// { // RESPOSTA
//   function handleShowElementBody(event) {
//     console.log(event.target)
//   }
  
//   const elementsBody = document.querySelectorAll('body *')
//   elementsBody.forEach(element => {
//     element.addEventListener('click', handleShowElementBody)
//   })
// }

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// { // RESPOSTA
//   function handleElementClick(event) {
//     // event.currentTarget.remove()
//   }
  
//   const fullElementsBody = document.querySelectorAll('body *')
//   fullElementsBody.forEach(element => {
//     element.addEventListener('click', handleElementClick)
//   })
// }

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
// {// RESPOSTA
  
//   function handlePressT(event) {
//     if (event.key === 't') {
//       console.log(event)
//       document.documentElement.classList.toggle('texto-maior')
//     }
//   }

//   window.addEventListener('keydown', handlePressT)
// }
