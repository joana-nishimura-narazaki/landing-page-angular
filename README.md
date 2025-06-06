# 🚀 Landing Page com Angular 17 + Backend

Este projeto é uma landing page responsiva desenvolvida com **Angular 17**, a versão mais recente do framework mantido pela Google. A aplicação foi construída com foco em **dispositivos desktop**, inclui **integração com um backend** para envio de dados e finaliza com o **deploy da aplicação**.

![Mockup do Projeto](./src/assets/landing-page-angular.jpg)

## 🧰 Tecnologias Utilizadas

* [Angular 17](https://angular.io/)
* TypeScript
* HTML5 & SCSS
* Backend (Node.js / AWS Lambda / outro)
* Git & GitHub
* [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), ou outra plataforma de deploy

## 🎯 Funcionalidades

* Layout moderno e responsivo (focado em desktop)
* Formulário de newsletter funcional
* Integração com backend para envio de dados via HTTP POST
* Validação de campos e mensagens de feedback
* Deploy automatizado

## 📦 Clonando o Projeto

```bash
git clone https://github.com/seu-usuario/landing-page-angular.git
cd landing-page-angular
```

### Iniciando

Agora você só precisa instalar as dependências e rodar a aplicação:

```bash
npm install
npm start
```

Acesse `http://localhost:4200` no navegador para visualizar o projeto.

## 🌐 Integração com Backend

A aplicação se conecta a um endpoint HTTP para envio de formulários. O backend pode ser hospedado com:

* AWS Lambda (com suporte a CORS)
* Node.js/Express
* Firebase Functions

> O endpoint pode ser configurado dentro do serviço Angular em `src/app/services/newsletter.service.ts`.

## 🚀 Deploy

A aplicação foi implantada usando:

* **[Vercel](https://vercel.com/)** (recomendado)
* **Netlify**
* Ou qualquer serviço de hospedagem de aplicações Angular

Para realizar o build:

```bash
ng build --configuration production
```

E envie o conteúdo da pasta `/dist` para o serviço de hospedagem.

## 📁 Estrutura de Pastas

```
src/
├── app/
│   ├── components/
│   ├── services/
│   └── app.module.ts
├── assets/
├── environments/
└── index.html
```

## 👨‍💻 Desenvolvido por

Joana Nishimura Narazaki
[LinkedIn](https://linkedin.com/in/seu-perfil) | [Portfólio](https://seusite.dev)
