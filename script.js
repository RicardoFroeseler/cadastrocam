// Inicializa o Html5QrCode e configura o leitor de código
const html5QrCode = new Html5Qrcode("leitor-codigo");

// Função que será chamada ao escanear com sucesso
function onScanSuccess(decodedText, decodedResult) {
    console.log(`Código detectado: ${decodedText}`);
    document.getElementById('codigoInterno').value = decodedText;
}

// Função para lidar com falhas na leitura
function onScanFailure(error) {
    console.warn(`Erro ao escanear código: ${error}`);
}

// Botão de iniciar a câmera
document.getElementById('iniciarCameraBtn').addEventListener('click', function() {
    // Força o uso da câmera traseira
    html5QrCode.start(
        { facingMode: { exact: "environment" } },  // Força o uso da câmera traseira
        { fps: 10, qrbox: { width: 250, height: 250 } },  // Configurações de escaneamento
        onScanSuccess,  // Função chamada ao escanear com sucesso
        onScanFailure   // Função chamada em caso de erro de escaneamento
    ).then(() => {
        // Mostra o botão de parar a câmera
        document.getElementById('pararCameraBtn').style.display = "block";
    }).catch(err => {
        console.error("Erro ao iniciar a câmera: ", err);
    });
});

// Botão de parar a câmera
document.getElementById('pararCameraBtn').addEventListener('click', function() {
    html5QrCode.stop().then(() => {
        console.log("Câmera parada.");
        document.getElementById('pararCameraBtn').style.display = "none";
    }).catch(err => {
        console.error("Erro ao parar a câmera: ", err);
    });
});

// Escaneamento de arquivo de imagem
document.getElementById('qr-input-file').addEventListener('change', function(e) {
    if (e.target.files.length === 0) {
        return;
    }

    const imageFile = e.target.files[0];

    html5QrCode.scanFile(imageFile, true)
        .then(decodedText => {
            console.log(`Código detectado: ${decodedText}`);
            document.getElementById('codigoInterno').value = decodedText;
        })
        .catch(err => {
            console.error(`Erro ao escanear o arquivo: ${err}`);
        });
});

// Listener para o formulário de cadastro de mercadoria
document.getElementById('cadastroMercadoriaForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    // Coleta os dados do formulário
    const codigoInterno = document.getElementById('codigoInterno').value;
    const nome = document.getElementById('nome').value;
    
    // Validação simples
    if (!codigoInterno || !nome) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    console.log({
        codigoInterno,
        nome,
    });

    alert('Mercadoria cadastrada com sucesso!');
});
