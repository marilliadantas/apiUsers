<h1 align="center"> API de Gerenciamento de Usuários </h1>

<p align="center">
Este projeto é uma API para gerenciamento de usuários, desenvolvida para estudo e aprimoramento de conhecimentos em backend.
</p>

<p align="center">
  <img width="36" height="36" src="https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/external-nodemon-process-will-automatically-restart-when-your-code-changes-logo-green-tal-revivo.png" alt="external-nodemon-process-will-automatically-restart-when-your-code-changes-logo-green-tal-revivo"/>
<img width="36" height="36" src="https://img.icons8.com/nolan/64/express-js.png" alt="express-js"/>
  <img src="https://expressionengine.com/asset/img/add-on-icons/mx-uuid.png" alt="UUID" width="30" height="30" style="margin: 0 10px;">
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-configuração">Configuração</a>&nbsp;&nbsp;&nbsp;
</p>

<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criar e gerenciar rotas da API de maneira eficiente.
- **UUID**: Biblioteca para gerar identificadores únicos universais (UUIDs).
- **JavaScript**: Linguagem de programação utilizada para desenvolver a API.

## 💻 Projeto

A API de Gerenciamento de Usuários é uma aplicação simples que permite realizar operações CRUD (Create, Read, Update, Delete) em um conjunto de usuários.

## 🔧 Endpoints

A API possui os seguintes endpoints:

- **GET /api/users**: Lista todos os usuários.
- **GET /api/users/:id**: Obtém um usuário pelo ID.
- **POST /api/users**: Cria um novo usuário. 
- **PUT /api/users/:id**: Atualiza um usuário existente. 
- **DELETE /api/users/:id**: Remove um usuário pelo ID.

## 🔧 Configuração

Para configurar e executar a API localmente, siga estes passos:
1. **Clone o repositório**:
   Primeiro, você precisa clonar o repositório para o seu ambiente local. Abra seu terminal e execute o comando:

   ```bash
   git clone https://github.com/marilliadantas/apiUsers.git
   ```
2. **Acesse o repositório do projeto**: 
    ```bash
    cd repositorio-do-projeto
    ```
3. **Instale as dependências**: 
    ```bash
    npm install
    ```
4. **Inicie o servidor**: 
    ```bash
    nodemon app.js
    ```

5. **Teste a API com Postman ou Insomnia**:
   Após iniciar o servidor, você pode testar os endpoints da API usando uma ferramenta 
   de testes de API, como Postman ou Insomnia.

  <br>

**Observação**: 
Esta API não está conectada a um banco de dados, o que significa que os dados são armazenados apenas na memória enquanto o servidor está em execução. Portanto, ao reiniciar o servidor ou realizar novas requisições, os dados inseridos anteriormente serão perdidos.

## 📚 Documentação

- [Nodemon](https://nodemon.io/)
- [Express.js](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Postman](https://www.postman.com)
- [Insomnia](https://insomnia.rest)