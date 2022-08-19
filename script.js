let qntd = parseInt(prompt('qual a quantidade de cartas (par, entre 4 e 14)'));
let contador = 0;
let timer = 0;
let par = qntd%2;

while (qntd < 4 || qntd > 14 || par !== 0) {
     par = qntd%2;
     qntd = parseInt(prompt('escolha a quantidade de cartas ~ 4 a 14 que seja par'));
}


const cards = ['carta1', 'carta1', 'carta2', 'carta2', 'carta3', 'carta3', 'carta4', 'carta4', 'carta5', 'carta5', 'carta6', 'carta6', 'carta7', 'carta7'];
const cartas = [];


// AQUI EU CRIO O ARRAY COM A QUANTIDADE DE CARTAS SELECIONADAS (EM DUPLAS);
for (let i = 0; i < qntd; i++) {
    cartas.push(cards[i]);
}

// AQUI EU EMBARALHO AS CARTAS ANTES DA FUNÇÃO QUE IRÁ CRIÁ-LAS NO DOM
cartas.sort(embaralhar);


 function iniciarCartas() {

    for (let i = 0; i < qntd; i++) {
         let elemento = document.querySelector('.conteudo');
         elemento.innerHTML = elemento.innerHTML +
            `<div class="carta ${cartas[i]} " onclick="virarCarta(this);setTimeout(compararCartas, 1000, '${cartas[i]}')" >
             <img class='costas'   src="assets/imgs/front.png" alt="">
            <img class='frente'  src="assets/imgs/${cartas[i]}.gif" alt="">
         </div>
        `
     }
}

iniciarCartas();

let idInterval;

function virarCarta(elemento) {
    elemento.firstElementChild.classList.add('esconder');
    elemento.lastElementChild.classList.add('mostrar');
    contador++;
    if (contador === 1) {

        idInterval = setInterval(fimJogo, 100);
    }

}

let array = [];
function compararCartas(parametro) {
    array.push(`.${parametro}`);


    /* const card1 = document.querySelector(`${array[0]}`);
    const card2 = document.querySelector(`${array[1]}`);
    card1.classList.add('.virada');
    card2.classList.add('.virada2');
    const lista = card1.classList.contains('.virada2'); 

    if (lista === true || lista2 === true) {
        array.pop();
    } */

    if (array.length === 2) {
        if (array[0] === array[1]) {
            const element = document.querySelectorAll(`${array[0]}`);
            element[0].classList.add('selecionado', 'selecionado1');
            element[1].classList.add('selecionado', 'selecionado1');
            element[0].firstElementChild.classList.add('esconder1');
            element[0].lastElementChild.classList.add('mostrar1');
            element[1].firstElementChild.classList.add('esconder1');
            element[1].lastElementChild.classList.add('mostrar1');
            element[0].firstElementChild.classList.remove('esconder');
            element[0].lastElementChild.classList.remove('mostrar');
            element[1].firstElementChild.classList.remove('esconder');
            element[1].lastElementChild.classList.remove('mostrar');
            array = [];
        } else if (array[0] !== array[1]) {
            const element1 = document.querySelectorAll(`${array[0]}`);
            const element2 = document.querySelectorAll(`${array[1]}`);
            element1[0].firstElementChild.classList.remove('esconder');
            element1[0].lastElementChild.classList.remove('mostrar');
            element1[1].firstElementChild.classList.remove('esconder');
            element1[1].lastElementChild.classList.remove('mostrar');
            element2[0].firstElementChild.classList.remove('esconder');
            element2[0].lastElementChild.classList.remove('mostrar');
            element2[1].firstElementChild.classList.remove('esconder');
            element2[1].lastElementChild.classList.remove('mostrar');
            array = [];


        }
    }
    // AO CLICAR PEGA A CLASSE DA CARTA (CARTA 1, CARTA 2 ETC). PUXAR AS CLASSES COM ARRAY E COMPARAR SE ARRAY[0] === ARRAY[1]
    //  SE FOR FAZER UM TCHUM E DPS RESETAR TUDO JUNTO COM A FUNÇÃO VIRAR CARTA

}

function fimJogo() {
    timer = timer + 0.1;
    const divTimer = document.querySelector('.timer');
    divTimer.innerHTML = timer.toFixed(1);
    const cartasCertas = document.querySelectorAll('.mostrar1');
    if (cartasCertas.length === cartas.length) {
        clearInterval(idInterval);
        alert(`Você ganhou em ${contador} jogadas e ${timer.toFixed(1)-0.1} segundos!`);
    }
    
}

function embaralhar() {
    return Math.random() - 0.5;
}