const veiculos = []; // Array para armazenar os veículos

// Função para obter todos os veículos
function getVeiculos(req, res) { 
    res.json(veiculos); // Retorna a lista de veículos em formato JSON
} 

// Função para obter um veículo específico por placa
function getVeiculosByPlaca(req, res) {
    const { placa } = req.params; // Obtém a placa da URL
    const veiculo = veiculos.find(v => v.placa === placa); // Busca o veículo pelo número da placa
    if (veiculo) { 
        res.json(veiculo); // Retorna o veículo encontrado
    } else {
        res.status(404).json({ message: 'Veículo não encontrado.' }); // Retorna erro 404 se não encontrado
    } 
} 

// Função para cadastrar um novo veículo
function createVeiculos(req, res) { 
    const { placa, marca, modelo, ano } = req.body; // Obtém os dados do veículo do corpo da requisição

    const veiculo = { placa, marca, modelo, ano }; // Cria um novo objeto de veículo
    veiculos.push(veiculo); // Adiciona o veículo ao array
    res.status(201).json({ message: 'Veículo cadastrado com sucesso.' }); // Retorna sucesso
} 

// Função para atualizar as informações de um veículo
function updateVeiculos(req, res) { 
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
} 

// Função para excluir um veículo
function deleteVeiculos(req, res) { 
    const { placa } = req.params; // Obtém a placa da URL
    const veiculoIndex = veiculos.findIndex(v => v.placa === placa); // Busca o índice do veículo pelo número da placa
    if (veiculoIndex !== -1) { 
        veiculos.splice(veiculoIndex, 1); // Remove o veículo do array
        res.json({ message: 'Veículo excluído com sucesso.' }); // Retorna sucesso
    } else { 
        res.status(404).json({ message: 'Veículo não encontrado.' }); // Retorna erro 404 se não encontrado
    } 
} 

// Exporta as