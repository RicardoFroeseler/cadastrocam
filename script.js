// Função para iniciar a câmera e capturar o código de barras
document.getElementById('iniciarCameraBtn').addEventListener('click', function() {
    // Inicia a leitura do código de barras
    const html5QrCode = new Html5Qrcode("leitor-codigo");
    
    // Configurações para iniciar a câmera e a leitura
    html5QrCode.start(
        { facingMode: "environment" },  // Usa a câmera traseira do celular
        {
            fps: 10,    // Velocidade de leitura (frames por segundo)
            qrbox: { width: 250, height: 250 }  // Tamanho da área de leitura
        },
        (decodedText, decodedResult) => {
            // Quando um código de barras é detectado com sucesso
            console.log(`Código detectado: ${decodedText}`);
            
            // Preenche o campo de código interno com o valor capturado
            document.getElementById('codigoInterno').value = decodedText;
            
            // Para a leitura da câmera após capturar o código
            html5QrCode.stop().then(() => {
                console.log("Leitura finalizada.");
            }).catch((err) => {
                console.log("Erro ao parar a leitura: ", err);
            });
        },
        (errorMessage) => {
            // Se ocorrer um erro (por exemplo, não encontrar código de barras)
            console.log("Erro de leitura: ", errorMessage);
        }
    ).catch((err) => {
        // Erro ao iniciar a câmera
        console.log("Erro ao iniciar a câmera: ", err);
    });
});

// Listener para o formulário de cadastro de mercadoria
document.getElementById('cadastroMercadoriaForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário (sem recarregar a página)
    
    // Captura os valores dos campos do formulário
    const codigoInterno = document.getElementById('codigoInterno').value;
    const nome = document.getElementById('nome').value;
    const precoCusto = document.getElementById('precoCusto').value;
    const precoVenda = document.getElementById('precoVenda').value;
    const grupo = document.getElementById('grupo').value;
    const quantidade = document.getElementById('quantidade').value;
    const unidade = document.getElementById('unidade').value;
    const fracionado = document.getElementById('fracionado').checked;
    
    // Validação simples dos campos obrigatórios
    if (!codigoInterno || !nome || !precoCusto || !precoVenda) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Exibe os dados no console para debug ou integração futura com um backend
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

    // Mensagem de sucesso ao cadastrar a mercadoria
    alert('Mercadoria cadastrada com sucesso!');
});
