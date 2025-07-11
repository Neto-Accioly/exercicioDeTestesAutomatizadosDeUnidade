# exercicioDeTestesAutomatizadosDeUnidade
Exercício de aprendizado em JS com testes de unidade.
# Exercício de Teste Unitário - Mentoria Júlio de Lima

Este repositório faz parte da minha jornada de aprendizado na área de Qualidade de Software (QA), onde estou praticando conceitos ensinados na **Mentoria 2.0 do Júlio de Lima**.  
O foco deste exercício é a **automação de testes unitários** utilizando **JavaScript puro** e a biblioteca nativa `assert` do Node.js.

---

## O que estou praticando

- Estruturação de código em JavaScript com separação entre lógica de negócio (`src`) e testes (`test`);
- Criação de funções puras para simular consultas com base em dados fictícios;
- Escrita de testes unitários utilizando `describe` e `it` para garantir o comportamento esperado das funções;
- Uso da asserção `strictEqual` da biblioteca `assert` para validar:
  - valores esperados vs valores retornados,
  - tratamento de entradas inválidas.

---

## Tecnologias utilizadas

- Node.js (ambiente de execução JavaScript)
- Módulo `assert` (biblioteca nativa para testes)
- JavaScript (ES6)
- Git e GitHub (versionamento de código)

---

## Estrutura do projeto
exercicioDeTestesAutomatizadosDeUnidade
├── node_modules/
├── src/
│ └── pesquisar.js # Função que retorna dados de uma "pessoa" com base no CPF
├── test/
│ └── pesquisar.test.js # Testes unitários automatizados para a função acima
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

---

## Como executar os testes

1. Clone o repositório:
```bash
git clone https://github.com/Neto-Accioly/exercicio-teste-unitario.git

npm install

node test/pesquisar.test.js

💬 Sobre o exercício
Neste desafio, a proposta foi criar uma função pesquisarPessoasPorCPF, que busca uma pessoa com base no CPF em um array de objetos. Em seguida, foram implementados testes automatizados para garantir que:

Quando um CPF válido é informado, os dados corretos da pessoa sejam retornados;

Quando um CPF inválido é informado, a mensagem "CPF não encontrado" seja retornada.
