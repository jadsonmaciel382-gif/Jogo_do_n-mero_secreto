let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window){
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
            console.log('web speech API nao suporta neste navegador.')
        
    }

}

function exibirMensagemInicial() {
exibirTextoNaTela('h1' , ' Jogo do número secreto');
exibirTextoNaTela('p' , ' Escolha um número de 1 a 10');
}
exibirMensagemInicial();

function verificarChute()  {  
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if ( chute == numeroSecreto) {
        exibirTextoNaTela('h1' , ' Parabéns você acertou! ');
        let mensagensTentativas = tentativas > 1 ? ' tentativas ' : ' tentativa ';
        let mensagemTentativas = ` Você descubriu o número secreto em ${tentativas} ${mensagensTentativas}! `;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p' , ' O numero secreto é menor ');
        } else { 
            exibirTextoNaTela('p' , ' O numero  secreto é maior ');
        } 
        tentativas++;
    limparImput();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

        if (quantidadeElementosNaLista == 10){
            listaDeNumerosSorteados = [];
        }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    }    

    function limparImput() {
        chute  =  document.querySelector('input'); 
        chute.value = ' ';}  

        function reiniciarJogo() {
            numeroSecreto = gerarNumeroAleatorio();
            limparImput();
            tentativas = 1;
            exibirMensagemInicial();
            document.getElementById('reiniciar').setAttribute('disabled', true);
        }
        