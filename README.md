# Nexa Digital
Este projeto é um App que localiza as clínicas médicas próximas do usuário e conecta com a API do Uber para transportar o usuário até o local desejado

Stack usado na aplicação:

----
## Client Side
* Create React App (React, Webpack, Autoprefixer, JSX, Babel)
* React Hooks
* Router
* Styled Components SASS
* Bootstrap

----
## Server Side
* NodeJs
* Express
* Google App Engine Standard 
* Microserviço de conexão com o banco
* MongoLab

----
#Endpoints
* App
    (https://nexa-digital.appspot.com)[https://nexa-digital.appspot.com]

* MongoDB API
    (https://mongo-dot-nexa-digital.appspot.com/userlist)[https://mongo-dot-nexa-digital.appspot.com/userlist]

* Mlab
	(https://mlab.com)[https://mlab.com]

----
#Jest Unit Tests
1. Teste de render
2. Teste de serviço MongoDB
3. Teste de serviço Google Maps
4. Teste de serviço API Uber

---
## C/I C/D
* Para usar esse repositório você deve fazer um fork dele
* Use a branch de desenvolvimento <development>
* A branch master está blockeada, fazendo um Pull Request e um Merge o projeto é buildado no Pipeline do BitBucket e é feito o deploy em nuvem do App Engine
* O Pipeline está rodando em Tests, Staging e Production, pode ser encontrado no arquivo bitbucket-pipelines.yml
* O server do MongoLab está na pasta <server> do projeto, para atualizar o banco em ambiente de Prod, siga os passos:
1. Instale o SDK do Google Cloud
2. Peça permissão para seu usuário no (Projeto Nexa Digital)[https://console.cloud.google.com/home/dashboard?project=nexa-digital]
3. Abra seu terminal na pasta do server e execute o comando
	gcloud app deploy --version=principal

---
## CORS
* Foi bloqueada requisições fora do escopo Banco > Front, se você for rodar o ambiente localmente, não será possível gravar as interações do usuário no banco da MLab em nuvem.