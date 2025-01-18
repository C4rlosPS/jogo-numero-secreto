
let listaDeNumerosSorteados = [];
const numeroLimite = 10;
let tentativas = 1;
let numeroSecreto = numAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function numAleatorio() {
    let numeroEscolhido;
    let qtdnumlista = listaDeNumerosSorteados.length;

    if (qtdnumlista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    do {
        numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    } while (listaDeNumerosSorteados.includes(numeroEscolhido));

    listaDeNumerosSorteados.push(numeroEscolhido);
    
    return numeroEscolhido;    
}

function msgIniciais(){
    exibirTextoNaTela('p', `Escolha um numero entre 1 e ${numeroLimite}: `);
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto!!');
}

msgIniciais();

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = ''; 
}


function verificarChute(){

    let chute = parseInt(document.querySelector('input').value);
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', `Opa você acertou!! meus parabens o numero secreto é ${numeroSecreto}!!`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let msgTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', msgTentativas);
        tentativas++;
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){            
            exibirTextoNaTela('p', 'Opaa o numero secreto é menor!!');
        }else{
            exibirTextoNaTela('p', 'Opaa o numero secreto é maior!!')
        }
        tentativas++;
    }
}

function reiniciarJogo() {
    numeroSecreto = numAleatorio(); 
    limparCampo();
    tentativas = 1;
    msgIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
    

