# Lista de Tarefas com ReactJS e Firebase
Este projeto é uma aplicação simples de uma lista de tarefas em ReactJS, que utiliza o Firebase para persistir os dados e o Tailwind CSS para estilização. É possível criar, ler, atualizar e excluir tarefas.

## Como utilizar
Para utilizar este projeto, você precisa seguir os seguintes passos:

- Clone este repositório para o seu computador.
- Insira suas credenciais do Firebase no arquivo firebase.js que está na pasta Connection do projeto.
- Instale as dependências do projeto com o comando npm install.
- Inicie o servidor de desenvolvimento com o comando npm start.
## Inserindo suas credenciais do Firebase
Para inserir suas credenciais do Firebase, você precisa seguir os seguintes passos:

- Acesse o console do Firebase e crie um novo projeto.
- Crie um banco de dados no Firestore e uma coleção com o nome "todos".
- Crie um arquivo chamado firebase.js na pasta Connection do projeto com o seguinte conteúdo:

Substitua os valores <sua_api_key>, <seu_auth_domain>, <seu_project_id>, <seu_storage_bucket>, <seu_messaging_sender_id> e <seu_app_id> com as suas próprias credenciais.

## Funcionalidades
A lista de tarefas tem as seguintes funcionalidades:

Adicionar uma nova tarefa
Marcar uma tarefa como concluída
Editar uma tarefa existente
Excluir uma tarefa existente

## Tecnologias utilizadas
Este projeto utiliza as seguintes tecnologias:

- ReactJS
- Firebase
- Tailwind CSS




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
