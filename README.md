Repositório criada para a Situação de Aprendizagem do SENAI
# 🧪 Connext - Testes E2E com Cypress

O objetivo principal foi garantir a qualidade da interface (UI) e o funcionamento dos fluxos críticos de usuário, utilizando o Cypress para simular interações reais.

### Pré-requisitos
Node.js e Cypress são cruciais para os testes. 


## 📋 Onde foram feitos os testes

### 🏠 Página Home
- Verificação de carregamento da página e título da aba.
- Conferência de elementos chave (Navbar, Hero Section)
- Verificação de links e direcionamento do botão de "Login/Cadastro".

### 📝 Página de Cadastro
- Preenchimento correto e submissão do formulário.
- Uso de `cy.intercept` para simular respostas do servidor (Status 200/201), garantindo testes rápidos e sem dependência de Backend real.
- Verificação de campos obrigatórios e formato de e-mail inválido.
- Validação de senhas divergentes (Senha vs Confirmar Senha).
- Verificação do funcionamento do botão "Fazer Login".
