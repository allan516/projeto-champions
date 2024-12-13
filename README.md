# API Champions

Este projeto é uma API desenvolvida para realizar operações relacionadas a jogadores e clubes, oferecendo endpoints para manipular e consultar informações de maneira eficiente.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **TypeScript**

## Endpoints Disponíveis

### Jogadores

1. **Listar todos os jogadores**

   - **Descrição**: Retorna uma lista com todos os jogadores cadastrados.
   - **Método HTTP**: `GET`
   - **Rota**: `/players`

2. **Listar jogador pelo ID**

   - **Descrição**: Retorna os detalhes de um jogador específico com base no ID fornecido.
   - **Método HTTP**: `GET`
   - **Rota**: `/players/:id`

3. **Criar um novo jogador**

   - **Descrição**: Adiciona um novo jogador ao sistema.
   - **Método HTTP**: `POST`
   - **Rota**: `/players`
   - **Requisição**: Deve incluir um corpo JSON com os dados do jogador.

4. **Deletar um jogador**

   - **Descrição**: Remove um jogador do sistema com base no ID fornecido.
   - **Método HTTP**: `DELETE`
   - **Rota**: `/players/:id`

5. **Atualizar estatísticas de um jogador**
   - **Descrição**: Permite modificar as estatísticas de um jogador específico.
   - **Método HTTP**: `PUT`
   - **Rota**: `/players/:id`
   - **Requisição**: Deve incluir um corpo JSON com as novas estatísticas.

### Clubes

1. **Listar todos os clubes**
   - **Descrição**: Retorna uma lista com todos os clubes cadastrados no sistema.
   - **Método HTTP**: `GET`
   - **Rota**: `/clubs`
