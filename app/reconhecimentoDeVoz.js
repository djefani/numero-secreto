const elementoChute = document.getElementById('chute');

const numeros = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }
 
 const corrigeNumeros = (palavra) => {
    for(numero in numeros){
       if(palavra === numero){
          palavra = numeros[numero];   
       }         
    }
    return palavra;
 }

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div> Você disse</div>
        <span class= "box">${chute}</span>
        `
}

recognition.addEventListener('end', () => recognition.start())
