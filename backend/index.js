const express = require('express'); // Importa o framework Express
const bodyParser = require('body-parser'); // Importa o middleware body-parser
const cors = require('cors'); // Importa o pacote CORS

const app = express(); // Cria uma instância da aplicação Express

// Habilita CORS para todas as origens (permite requisições de outros domínios)
app.use(cors()); // Ou use app.use(cors({ origin: 'http://localhost:5173' })) para limitar a origem

// Usando body-parser para entender o corpo das requisições em JSON
app.use(bodyParser.json()); // Configura o body-parser para processar JSON

const veiculos = []; // Array para armazenar os veículos

// Rota para obter todos os veículos
app.get('/veiculos', (req, res) => {
    res.json(veiculos); // Retorna a lista de veículos como resposta em JSON
});

// Rota para obter um veículo específico por placa
app.get('/veiculos/:placa', (req, res) => {
    const { placa } = req.params; // Obtém a placa da URL
    const veiculo = veiculos.find(v => v.placa === placa); // Busca o veículo pelo número da placa
    if (veiculo) {
        res.json(veiculo); // Retorna o veículo encontrado
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' }); // Retorna erro 404 se não encontrado
    }
});

// Rota para cadastrar um novo veículo
app.post('/veiculos', (req, res) => {
    const { placa, marca, modelo, ano } = req.body; // Obtém os dados do veículo do corpo da requisição
    const veiculo = { placa, marca, modelo, ano }; // Cria um novo objeto de veículo
    veiculos.push(veiculo); // Adiciona o veículo ao array
    res.status(201).json({ message: 'Veículo cadastrado com sucesso.' }); // Retorna sucesso
});

// Rota para atualizar as informações de um veículo
app.put('/veiculos/:placa', (req, res) => {
    const { placa } = req.params; // Obtém a placa da URL
    const { marca, modelo, ano } = req.body; // Obtém os novos dados do corpo da requisição
    const veiculo = veiculos.find(v => v.placa === placa); // Busca o veículo pelo número da placa
    if (veiculo) {
        // Atualiza as informações do veículo, se encontrado
        veiculo.marca = marca || veiculo.marca;
        veiculo.modelo = modelo || veiculo.modelo;
        veiculo.ano = ano || veiculo.ano;
        res.json({ message: 'Informações do veículo atualizadas com sucesso.' }); // Retorna sucesso
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' }); // Retorna erro 404 se não encontrado
    }
});

// Rota para excluir um veículo
app.delete('/veiculos/:placa', (req, res) => {
    const { placa } = req.params; // Obtém a placa da URL
    const veiculoIndex = veiculos.findIndex(v => v.placa === placa); // Busca o índice do veículo pelo número da placa
    if (veiculoIndex !== -1) {
        veiculos.splice(veiculoIndex, 1); // Remove o veículo do array
        res.json({ message: 'Veículo excluído com sucesso.' }); // Retorna sucesso
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' }); // Retorna erro 404 se não encontrado
    }
});

const port = 3000; // Define a porta do servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Inicia o servidor e exibe mensagem no console
});