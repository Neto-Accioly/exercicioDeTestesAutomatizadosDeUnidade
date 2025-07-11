function pesquisarPessoasPorCPF(cpf) {
    const pessoas = [
    {
        nome: 'neto',
        cpf: '123456789',
        frutasFavoritas: ['acerola', 'maracuja']
    },
    {
        nome: 'neto',
        cpf: '123456788',
        frutasFavoritas: ['manga', 'goiba']        
    },
    {
        nome: 'heloisa',
        cpf: '987654321',
        frutasFavoritas: ['kiwi', 'maça']
    },
    {
        nome: 'clarice',
        cpf: '987654322',
        frutasFavoritas: ['uva', 'morango']
    },
    {
        nome: 'maria',
        cpf: '987654333',
        frutasFavoritas: ['jaca', 'laranja']
    },
    {
        nome: 'bruna',
        cpf: '987654344',
        frutasFavoritas: ['maracuja', 'caju']
    }   
  ]

  for (let indice = 0; indice < pessoas.length; indice++) {
    if (cpf == pessoas[indice].cpf) {
        return pessoas[indice]
    }
  }

  return 'CPF não encontrado'
}

module.exports = {
    pesquisarPessoasPorCPF
}