# Consulta CEP

Este projeto é uma aplicação web que permite aos usuários consultar informações de um CEP (Código de Endereçamento Postal) no Brasil.

## Recursos

- Consulta de CEP

## Tecnologias Utilizadas

- Node.js
- Node-Cache
- Axios

## Como Instalar e Executar

1. Clone o repositório para a sua máquina local usando `git`:

```bash
git clone https://github.com/LyTT19/consulta-cep.git
```

2. Navegue até o diretório do projeto:
```bash
cd consulta-cep
```

3. Instale as dependências do projeto:
```bash
npm install
```

4. Para iniciar o servidor, execute:
```bash
npm start
```
## Como Usar

E necessário realizar o login para gerar o JWT para autorizar as requisições que retornam as informações do CEP

### Autenticação

Este projeto inclui uma rota de autenticação que permite aos usuários fazer login.

### Como Usar

#### Rota de Login

- **URL**: `/auth/login`
- **Método HTTP**: `POST`
- **Corpo da Requisição**: Um objeto JSON com `username` (o nome de usuário) e `password` (a senha)

Exemplo de uso:

```bash
curl -X POST -H "Content-Type: application/json" -d "{ \"username\": \"seu_usuario\", \"password\": \"sua_senha\" }" http://localhost:3000/auth/login
```
Devera ser retornado um `access_token`

Com o token gerado pode ser realizado as requisições a seguir

#### Rota de Consulta de CEP (POST)

- **URL**: `/cep/:cep`
- **Método HTTP**: `POST`
- **Parâmetros da URL**: `cep` (o CEP que você deseja consultar)

Exemplo de uso:
```bash
curl -X POST -H "Authorization: Bearer seu_token_de_acesso" http://localhost:3000/cep/01001000
```

Isso retornará as informações do CEP 01001000.

#### Rota de Consulta de CEP com Formato (POST)

-URL: `/cep`
-Método HTTP: `POST`
-Corpo da Requisição: Um objeto JSON com cep (o CEP que você deseja consultar) e format (o formato desejado para a resposta que pode ser `json` ou `xml`)

Exemplo de uso:
```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer seu_token_de_acesso" -d "{ \"cep\": \"01001000\", \"format\": \"xml\" }" http://localhost:3000/cep
```

## Contribuições
Contribuições são sempre bem-vindas. Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou um pull request.

## Licença
Este projeto está licenciado sob a licença MIT.
   
