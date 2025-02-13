# Processo-Seletivo-Engenheiro-de-QA-Pleno

Este repositório contém os testes realizados para o processo seletivo de Engenheiro de QA Pleno.  As ferramentas utilizadas foram:

- Cypress para testes de UI.

- Jest e Supertest para testes de API.

- k6 para testes de performance.

O formulário de cadastro utilizado nos testes de UI foi desenvolvido por mim e pode ser acessado no seguinte link: [Formulário de cadastro](https://julianoquites.github.io/mock-formulario-de-cadastro/).


## Resultados dos Testes de UI
![image](https://github.com/user-attachments/assets/be03db35-8ec1-4a48-9d9c-d933348e9bcc)

- **Total de Testes**: 6
- **Aprovados**: 6 (100%)
- **Falhas**: 0
- **Duração**: 6,9s

**Cenários testados**:
- Validação de formulário (sucesso e erros).
- Verificação de senha (tamanho, maiúscula e número).
- Confirmação de e-mail (e-mails devem coincidir).

**Conclusão**: Todos os testes passaram, indicando que a UI está funcionando conforme o esperado.

## Resultados dos Testes de API
![image](https://github.com/user-attachments/assets/0634ece9-6cb0-4d35-ae14-e052e956f24f)


- **Total de Testes**: 5
- **Aprovados**: 5 (100%)
- **Falhas**: 0
- **Duração**: ~1.42s

**Cenários testados**:
- **GET /posts**: Retorna status 200 e lista de posts.
- **GET /posts/1**: Retorna status 200 e detalhes do post com ID 1.
- **GET /posts/1 (inexistente)**: Retorna status 404.
- **POST /posts**: Retorna status 201 e cria um novo post.
- **Mock de erro 400**: Retorna status 400 ao tentar criar um post sem campos obrigatórios.

**Conclusão**: Todos os testes passaram, indicando que a API está funcionando conforme o esperado.

## Resultados do Teste de Performance com k6
![Screenshot 2025-02-12 at 22-29-35 K6 Summary Report](https://github.com/user-attachments/assets/a4f42bdd-e613-43da-9013-d79022890be9)


- **Tempo de Resposta**: A API respondeu rapidamente sob carga, com tempo médio de **31,25 ms** e 95% das requisições em menos de **43 ms**.
- **Erros de Requisição**: Taxa de falha de **0,7%** (18 falhas em 2.585 requisições), indicando boa estabilidade sob carga.
- **Estabilidade do Sistema**: Desempenho consistente, sem degradação significativa durante o teste.

**Conclusão**: A API mostrou bom desempenho e estabilidade, com tempo de resposta rápido e baixa taxa de erros sob carga.
