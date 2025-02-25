# Testes Automatizados com Jest e Cypress

### Qual a diferença entre testes unitários e testes E2E (End to End) em aplicações mobile? 
#### R: Testes Unitários são testes que cobrem apenas uma certa unidade de funcionamento da aplicação, sendo exemplo um componente ou um Hook. Já os Testes E2E, são testes mais complexos com finalidade de replicar ao máximo a experiência do usuário, como exemplo testar um sistema de cadastro, onde a ferramenta de teste percorre todo o fluxo e retorna se foi bem-sucedido ou não.  

## Para a Realização dos Testes:

### 1️: Instalar dependências
### Jest e Cypress

#### npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
#### npm install cypress --dev

#### Estaremos usando o Jest junto do Expo GO para rodar os testes unitários, e o Cypress com o Expo WEB para os testes E2E.

### 2: Rodar testes unitários:
#### Após clonar o repositório, rode os testes TaskButton.test.ts e useCounter.test.ts utilizando o comando:
### npx jest
#### Se obter sucesso, uma mensagem de sucesso aparecerá.

### 3: Rodar testes E2E:
#### Para rodar os testes E2E, rode os seguintes comandos:
### npx expo start --web (para iniciar o ambiente do expo no navegador)
### npx cypress open
#### Ao rodar, ele abrirá a interface gráfica do Cypress, escolha a opção E2E e em seguida procure pelo arquivo tasks.cy.js, ao clicar, ele iniciará os testes simulando um usuário, onde ele adicionará uma tarefa e irá marcá-la como concluída.
