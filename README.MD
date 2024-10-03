# Cadastro de Mercadorias - Versão 2.3

Este é um projeto para realizar o cadastro de mercadorias utilizando a leitura de códigos de barras (ou QR Codes) diretamente da câmera do dispositivo móvel. O sistema foi projetado com a intenção de ser reaproveitado em projetos maiores, onde será necessária a integração com um banco de dados, como o Firebase.

## Objetivo do Projeto

O projeto tem como objetivo fornecer uma interface simples e eficiente para o cadastro de mercadorias. Ele permite:
- Capturar códigos de barras utilizando a câmera do dispositivo móvel.
- Preencher automaticamente o campo "Código Interno" com o código de barras ou QR Code capturado.
- Cadastrar mercadorias com informações como nome, preço de custo, preço de venda, grupo, unidade de medida e se o item é fracionado.
- Exibir uma interface moderna e responsiva, otimizando a experiência do usuário em dispositivos móveis.

### Versão atual: 2.3

## Funcionalidades

- **Leitura de Código de Barras/QR Code**: O sistema utiliza a câmera do dispositivo para escanear códigos de barras ou QR Codes e preencher automaticamente o campo "Código Interno".
- **Campos de Cadastro**: Permite o preenchimento de campos como:
  - Nome ou Descrição
  - Preço de Custo
  - Preço de Venda
  - Grupo da Mercadoria
  - Quantidade
  - Unidade de Medida (kg, un, outros)
  - Indicação se o item é fracionado (usando um toggle switch moderno)
- **Design Responsivo**: O layout é projetado para ser 100% compatível com dispositivos móveis, exibindo uma mensagem se o site for acessado em dispositivos maiores, como desktops.
- **Fácil Integração**: O sistema foi construído para ser facilmente expandido e integrado com um banco de dados, como o Firebase, em projetos futuros.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com design responsivo e temas escuros)
- **JavaScript**
- **[Html5-qrcode](https://github.com/mebjas/html5-qrcode)**: Biblioteca usada para acessar a câmera do dispositivo e realizar a leitura dos códigos de barras e QR Codes.

## Instalação e Uso

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
