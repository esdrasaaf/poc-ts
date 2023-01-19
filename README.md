# PoC 01 - TypeScript

<h3> Uma Proof of Concept sobre TypeScript! Consiste em ser uma aplicação back-end usando Node.js, Express, Joi e TypeScript. Usada para medir o meu entendimento sobre TS e suas funcionalidades, para que eu me sinta confortável ao utilizar esta ferramenta. </h3>

> TEMA: Organizador de filmes

## DOC-API

1. Pegar todos os filmes:
    
    Route get: ```"/movies"``` 

    Desrição: Nesta rota você consegue pegar todos os filmes do banco de dados. 
    
    Saida:
    ```bash
    [
        {
            "id": 1,
            "name": "Os Vingadores",
            "platform": "Disney +",
            "genre": "Ação",
            "status": true,
            "rating": 1000,
            "summary": "mt bom",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
        {
            "id": 2,
            "name": "A ida dos que não chegaram",
            "platform": "Netflix",
            "genre": "Comédia",
            "status": false,
            "rating": 0,
            "summary": "",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
    ]
    ```

2. Pegar todos os filmes filtrados pelo gênero: 

    Route get: ```"/movies/genre/:genre"``` 
    
    Desrição: Filtra a lista de filme baseado no gênero que foi passado. 

    Saida:
    ```bash
    [
        {
            "id": 2,
            "name": "A ida dos que não chegaram",
            "platform": "Netflix",
            "genre": "Comédia",
            "status": false,
            "rating": 0,
            "summary": "",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
        {
            "id": 3,
            "name": "A volta dos que não foram",
            "platform": "Netflix",
            "genre": "Comédia",
            "status": false,
            "rating": 0,
            "summary": "",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
    ]
    ```

3. Pegar todos os filmes filtrados pela plataforma: 

    Route get: ```"/movies/platform/:platform"``` 

    Desrição: Filtra a lista de filme baseado na plataforma de streaming que foi passada. 

    Saida:
    ```bash
    [
        {
            "id": 3,
            "name": "A volta dos que não foram",
            "platform": "Netflix",
            "genre": "Comédia",
            "status": false,
            "rating": 0,
            "summary": "",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
        {
            "id": 4,
            "name": "A casa de massinha",
            "platform": "Netflix",
            "genre": "Suspense",
            "status": false,
            "rating": 0,
            "summary": "",
            "created_at": "2023-01-19T03:00:00.000Z"
        },
    ]
    ```

4. Inserir um novo filme:

    Route post: ```"/movies"```
    
    Desrição: Adiciona um filme no banco de dados.

    Entrada: 
    ```bash
        {
            "name": "A casa de massinha",
            "platform": "Netflix",
            "genre": "Suspense"
        }
    ```
    Saida: status 201.


5. Editar filme:

    Route put: ```"/movies/:id"```
    
    Desrição: Edita dados de um filme no banco de dados, serve para diferenciar filmes já assistidos de filmes que ainda não foram vistos.

    Entrada: 
    ```bash
        {
            "status": true,
            "rating": 10,
            "summary": "mt bom"
        }
    ```
    Saida: status 201. 

6. Deletar filme:

    Route delete: ```"/movies/:id"```
    
    Desrição: Deleta um filme do banco de dados.

    Saida: status 200. 