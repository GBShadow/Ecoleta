<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src=".github/logo.png">
    <br><br>
    <b>Recicle! ajude o meio ambiente!</b>  
    <br>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>  
</p>

# Índice

- [Sobre](#sobre)
- [Documentação](#documentacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O <strong>Ecoleta</strong> é uma aplicação Web e Mobile para ajudar pessoas a encontrarem pontos de coleta para reciclagem.

Essa aplicação foi construída na trilha <strong>Booster</strong> da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/). A ideia de criar uma aplicação voltada ao meio ambiente surgiu da coincidência da data do curso e a data da <strong>semana do meio ambiente</strong>

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :heavy_check_mark: :computer: Resultado Web

- O layout está disponível no **[Figma](https://www.figma.com/file/R4UzTS20Q5zQFpdmUjFQ4Q/Ecoleta-Booster?node-id=0%3A1)**;

<h1 align="center">
    <img alt="Web" src=".github/Video.gif" width="900px">
</h1>

## :heavy_check_mark: :iphone: Resultado Mobile

<h1 align="center">
    <img alt="Mobile Home" src=".github/Home.png" width="300px">
    <img alt="Mobile Detail" src=".github/Detail.svg" width="300px">
</h1>

<a id="como-usar"></a>

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/GBShadow/Ecoleta
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ yarn ou npm install

  ## Crie o banco de dados
  $ cd server
  $ yarn ou npm run knex:migrate
  $ yarn ou npm run knex:seed

  # Inicie a API
  $ yarn ou npm run dev

  # Inicie a aplicação web
  $ cd web
  $ yarn ou npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ yarn ou npm start
```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## :mortar_board: Quem ministrou?

As aulas foram ministradas pelo mestre **[Diego Fernandes](https://github.com/diego3g)** nas aulas da **Next Level Week**.
