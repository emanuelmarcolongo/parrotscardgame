const qntd = parseInt(prompt('qual a quantidade de cartas (par, entre 4 e 14)'));

// ||
// while (quantidade < 4 && quantidade > 14 && par !== 0) {
//     console.log(quantidade);
//     let par = quantidade%2;
//     let quantidade = parseInt(prompt('escolha a quantidade de cartas ~ 4 a 14 que seja par'));
//     alert('escolha novamente');
// }



// if (par === 0) {
//     alert('Você escolheu um número par');
// } else {
//     alert('você escolheu uma quantidade inválida');
// }

// const comparador1 = document.querySelector('.carta1').lastElementChild;
// const comparador2 = document.querySelector('.carta3').lastElementChild;
// console.log(comparador1);
// console.log(comparador2);




const cards = ['carta1', 'carta1', 'carta2', 'carta2', 'carta3', 'carta3', 'carta4', 'carta4', 'carta5', 'carta5', 'carta6', 'carta6', 'carta7', 'carta7'];
const cartas = [];


// AQUI EU CRIO O ARRAY COM A QUANTIDADE DE CARTAS SELECIONADAS (EM DUPLAS);
for (let i=0; i < qntd; i++) {
    cartas.push(cards[i]);
}

// AQUI EU EMBARALHO AS CARTAS ANTES DA FUNÇÃO QUE IRÁ CRIÁ-LAS NO DOM
cartas.sort(embaralhar);



function iniciarCartas() {

    for (let i = 0; i < qntd; i++) {
        let elemento = document.querySelector('.conteudo');
        elemento.innerHTML = elemento.innerHTML +
        `<div class="carta ${cartas[i]}" onclick="virarCarta(this)" >
            <img class='costas'   src="assets/imgs/front.png" alt="">
            <img class='frente'  src="assets/imgs/${cartas[i]}.gif" alt="">
        </div>
        `
    }
}

iniciarCartas();

function virarCarta(elemento) {
    elemento.firstElementChild.classList.toggle('esconder');
    elemento.lastElementChild.classList.toggle('mostrar');

}

function embaralhar() { 
	return Math.random() - 0.5; 
}