// Adiciona um listener ao formulário para capturar o evento de submissão
document.getElementById('cadastroMercadoriaForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio do formulário para o servidor
    
    // Captura os valores dos campos
    const codigoInterno = document.getElementById('codigoInterno').value;
    const nome = document.getElementById('nome').value;
    const precoCusto = document.getElementById('precoCusto').value;
    const precoVenda = document.getElementById('precoVenda').value;
    const grupo = document.getElementById('grupo').value;
    const quantidade = document.getElementById('quantidade').value;
    const unidade = document.getElementById('unidade').value;
    const fracionado = document.getElementById('fracionado').checked;
    
    // Validação básica (apenas como exemplo)
    if (!codigoInterno || !nome || !precoCusto || !precoVenda) {
        alert('Por favor, preencha os campos obrigatórios.');
        return;
    }
    
    // Exibe os dados no console (ou você poderia enviar para um backend)
    console.log({
        codigoInterno,
        nome,
        precoCusto,
        precoVenda,
        grupo,
        quantidade,
        unidade,
        fracionado
    });

    // Exibe uma mensagem de sucesso para o usuário
    alert('Mercadoria cadastrada com sucesso!');
});
