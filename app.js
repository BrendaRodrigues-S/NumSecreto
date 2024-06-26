alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 20;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute; 
let tentativas = 1;

// Enquanto chute não for igual o n.s
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// Se o chute for igual o numero secreto
    if (numeroSecreto == chute) {  
        break;
    }else{
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);


// if (tentativas > 1){
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// }else {
//     alert(`Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }


