const {pesquisarPessoasPorCPF} = require('../src/pesquisar.js')
const {strictEqual} = require('node:assert')

describe('Pesquisar', ()=> {
    it('Ao informar o CPF da Bruna deve retornar os dados como Nome, CPF e a sua primeira fruta favorita', () => {
        const cpfPesquisado = '987654344'
        const nomeEsperado = 'bruna'
        const cpfEsperado = '987654344'
        const primeiraFrutasEsperada = 'maracuja'
        
        const pessoa = pesquisarPessoasPorCPF(cpfPesquisado)

        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutasEsperada)
    })

    it('Ao informar um CPF não registrado, deve retornar CPF não encontrado', () =>{
        const cpfPesquisado = '000000000'
        const mensagemEsperada = 'CPF não encontrado'

        const pessoa = pesquisarPessoasPorCPF(cpfPesquisado)

        strictEqual(pessoa, mensagemEsperada)
    })
})