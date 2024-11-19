const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um novo roteador para definir rotas

const controller = require('./controller'); // Importa o módulo de controle que contém as funções para lidar com as rotas

// Define a rota para obter todos os veículos
router.get('/veiculos', controller.getVeiculos); 

// Define a rota para obter um veículo específico por placa
router.get('/veiculos/:placa', controller.getVeiculosByPlaca); 

// Define a rota para cadastrar um novo veículo
router.post('/veiculos', controller.createVeiculos); 

// Define a rota para atualizar as informações de um veículo
router.put('/veiculos/:placa', controller.updateVeiculos); 

// Define a rota para excluir um veículo
router.delete('/veiculos/:placa', controller.deleteVeiculos); 

// Exporta o roteador para ser usado em outros módulos
module.exports = router;