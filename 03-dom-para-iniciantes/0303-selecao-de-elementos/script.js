// Retorne no console todas as imagens do site
const totalImgs = document.querySelectorAll('img')
console.log(totalImgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgAnimais = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imgAnimais)

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[href^="#"]')
internalLinks.forEach(link => {
  console.log(link)
})

// Selecione o primeiro h2 dentro de .animais-descricao
const firstTitleAnimaisDescription = document.querySelector('.animais-descricao h2')
console.log(firstTitleAnimaisDescription)

// Selecione o último p do site
const lastParagraphSite = document.querySelectorAll('p')
console.log(lastParagraphSite[--lastParagraphSite.length])

