# 📚 API Bookstore 📚

 
### Descrição

 - Projeto de conclusão do módulo 4 da formação em Desenvolvimento Web Full Stack @ Resilia. 
 - O projeto consiste na criação de uma API REST para interagir com informações do banco de dados de uma livraria. 
 - As condições principais para a entrega do projeto foram: 
   - o uso do padrão REST, com os verbos referentes ao protocolo HTTP; 
   - o uso do padrão DAO ou de ORM para interagir com o banco de dados - optamos por utilizar o ORM Sequelize e o banco de dados SQLite.;
   - Utilização do padrão MVC. 

### Modelagem do banco de dados

- O presente repositório se refere à tabela Autor
  


### Como executar o projeto
- Você precisa ter instalada em sua máquina a versão 16.14.0 do NodeJS;
- Faça clone do seguinte repositório:
 
    ```js
    git clone https://github.com/carollyb/api-bookstore.git
-  Instale as dependências
     ```js
     npm install

- Inicie o projeto
   ```js
   npm run dev
### Criando uma conexão no Beekeeper

  Caso queira observar as alterações no banco de dados, a aplicação open-source Beekeeper é uma opção.
  - Disponível para download em: `https://www.beekeeperstudio.io/`
  
  Após a instalação:
- Select a connection type: sqlite
- database file: Procurar a pasta do projeto e seleciona o arquivo dev.sqlite
- Nomear e salvar
- Rodar o servidor com npm run dev e recarregar no Beekeeper: a(s) entidade(s) deve(m) aparecer lá

### Estrutura da API: rotas possíveis

- POST: 
  - /books (Cria um cadastro de um novo livro. Deve passar o objeto no corpo da requisição. O id não é necessário pois é gerado automaticamente através da biblioteca uuid)
  
- GET: 
  - /books (Lista todos os títulos cadastrados)
  - /books/<título> (Lista títulos que sejam semelhantes ou iguais ao título passado como parâmetro)

- PUT:
  - /books/<id> (Atualiza todos os atributos de um livro cadastrado. Deve passar o objeto com todos os atributos no corpo da requisição, com exceção do id, que não deve ser alterado manualmente)

- PATCH: 
  - /books/<id> (Atualiza um título de um livro cadastrado. Deve passar o atributo no corpo da requisição, e o id como parâmetro)

- DELETE:
  - /books/<id> (Deleta um livro do banco de dados. Deve passar o id do livro como parâmetro)


### Testes
- Para rodar os testes automatizados, execute no terminal:

  ```js
  npm run test
### Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)


- NodeJS
- Express
- Sequelize ORM
- JavaScript
- Insomnia
- Beekeeper


