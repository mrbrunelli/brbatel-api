## BrBatel API Back-end

### Documentação das rotas
Deixei exemplos prontos de chamadas às rotas criadas.
:link: [Link Documentação API](https://github.com/mrbrunelli/brbatel-api/tree/master/api-docs)

### Requisitos
1. Docker
2. docker-compose
3. Visual Studio Code
4. Extensão vscode REST Client (para testar as rotas com mais facilidade)

### Como executar
1. Crie um arquivo .env na raíz do projeto conforme o .env.example

2. Executar docker-compose
```sh
docker-compose up -d
```

3. Acesse a aplicação em http://localhost:3333/ e deverá aparecer:
```json
{
  "title": "BrBatel API Service",
  "message": "Seja muito bem vindo! Consulte a documentação da API:",
  "url": "https://github.com/mrbrunelli/brbatel-api/tree/master/api-docs"
}
```

### Objetivos Propostos
- [x] Estruturar o projeto para
implementação de uma API Rest.
- [x] Criar rotas de cadastro,
atualização e exclusão da empresa.
- [x] Criar rota para listar as empresas e
essa rota deve comportar pesquisa e
paginação.
- [x] Criar rota para retornar a informação
de uma empresa cadastrada baseado
no ID dela (/company/:id).

### Tecnologias Obrigatórias
- [x] Node + Typescript
- [x] Express
- [x] PostgreSQL
- [x] Git
