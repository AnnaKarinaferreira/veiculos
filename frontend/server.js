const express = require('express'); // Importa o framework Express
const bodyParser = require('body-parser'); // Importa o middleware body-parser para processar requisições
const routes = require('./routes'); // Importa o módulo de rotas que contém as definições das rotas
const cors = require('cors'); // Importa o pacote CORS para permitir requisições de diferentes origens

const app = express(); // Cria uma instância da aplicação Express

// Configura o middleware para interpretar o corpo das requisições em formato JSON
app.use(bodyParser.json()); 

// Habilita CORS para permitir requisições de diferentes origens
app.use(cors()); 

// Usa o roteador importado para definir as rotas da aplicação
app.use('/', routes); 

const port = 3000; // Define a porta em que o servidor irá escutar
// Inicia o servidor e exibe uma mensagem no console informando que está rodando
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); 
});