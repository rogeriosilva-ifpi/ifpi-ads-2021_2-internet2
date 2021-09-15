
const criarFilmeElement = (item) => {
  // conectar no elemento template
  const template = document.getElementById('filme-template')

  // clonar template
  const filmeElement = document.importNode(template.content, true)

  // preencher os dados
  const itens_filme = filmeElement.querySelectorAll('span')

  itens_filme[0].innerText = item.nome
  itens_filme[1].innerText = item.genero
  itens_filme[2].innerText = item.duracao
  itens_filme[3].innerText = item.ano

  return filmeElement
}

const carregarFilmes = async () => {

  // Comunicacao com a API
  const response = await fetch('http://localhost:3000/filmes')
  const dados = await response.json()
  console.log(dados)


  dados.forEach(item => {
    const containerFilmesElement = document.getElementById('container-filmes')

    const filmeElement = criarFilmeElement(item)

    // Adiciona o elemento filme ao Container de Filmes
    containerFilmesElement.append(filmeElement)

  })  

}

const novoFilme = async () => {
  const filmeNomeElement = document.getElementById('filme-nome')
  const filmeGeneroElement = document.getElementById('filme-genero')
  const filmeDuracaoElement = document.getElementById('filme-duracao')
  const filmeAnoElement = document.getElementById('filme-ano')

  const filme = {
    nome: filmeNomeElement.value,
    genero: filmeGeneroElement.value,
    duracao: Number(filmeDuracaoElement.value),
    ano: Number(filmeAnoElement.value)
  }

  const init = {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(filme)
  }

  // Chamar POST na API
  const response = await fetch('http://localhost:3000/filmes', init)
  console.log(response)
  const dados = await response.json()

  // Adicionar novo filme à listagem
  const containerFilmesElement = document.getElementById('container-filmes')

  const filmeElement = criarFilmeElement(dados)

  // Adiciona o elemento filme ao Container de Filmes
  containerFilmesElement.prepend(filmeElement)
}


window.onload = () => {
  carregarFilmes()

  const btnNovoFilme = document.getElementById('btnNovoFilme')

  btnNovoFilme.onclick = novoFilme

  console.log('Iniciado')
}