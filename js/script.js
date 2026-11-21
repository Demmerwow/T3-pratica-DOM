// ==========================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================
const btnStatus = document.getElementById('btn-status');
const textoStatus = document.getElementById('texto-status');
const statusBox = document.querySelector('.status-box');
const body = document.body;

const inputNome = document.getElementById('input-nome');
const mensagemBoasVindas = document.getElementById('mensagem-boas-vindas');

// Variável para controlar o estado atual
let estadoAlerta = false;

// ==========================================
// 2. EVENTO DE CLIQUE (Modificando Conteúdo e Estilo)
// ==========================================
btnStatus.addEventListener('click', () => {
    // Inverte o estado a cada clique
    estadoAlerta = !estadoAlerta;

    if (estadoAlerta) {
        // Modificando o CONTEÚDO de texto
        textoStatus.textContent = "Status: ALERTA CRÍTICO!";
        btnStatus.textContent = "Restaurar Normalidade";
        
        // Modificando o ESTILO (classes CSS e cores do body)
        textoStatus.classList.add('texto-alerta');
        statusBox.classList.add('estado-alerta');
        body.style.backgroundColor = "#450a0a"; // Fundo vermelho escuro
        
    } else {
        textoStatus.textContent = "Status: Normal";
        btnStatus.textContent = "Mudar Status";
        
        textoStatus.classList.remove('texto-alerta');
        statusBox.classList.remove('estado-alerta');
        body.style.backgroundColor = ""; // Volta ao padrão do CSS
    }
});

// ==========================================
// 3. EVENTO DE INPUT (Resposta em Tempo Real)
// ==========================================
inputNome.addEventListener('input', (evento) => {
    // Pega o valor atual do input
    const nomeDigitado = evento.target.value;

    if (nomeDigitado.length === 0) {
        // Se o campo estiver vazio, volta ao estado inicial
        mensagemBoasVindas.innerHTML = "<p>Aguardando interação...</p>";
    } else {
        // Modificando o conteúdo HTML internamente
        mensagemBoasVindas.innerHTML = `<p class="texto-sucesso">Bem-vindo(a) ao IAS, ${nomeDigitado}!</p>`;
    }
});