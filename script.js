let qntd;
qntd = parseInt(prompt(
    `Escolha a quantidade de 4 a 14 cartas:
    Número par`));
let contador = 0;
let timer = 0;
let par = qntd % 2;

while (qntd < 4 || qntd > 14 || par !== 0) {
    par = qntd % 2;
    qntd = parseInt(prompt(`Escolha a quantidade de 4 a 14 cartas:
     Número par`));
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

    let elemento = document.querySelector('.conteudo');
    elemento.innerHTML = '';

    for (let i = 0; i < qntd; i++) {
        elemento.innerHTML = elemento.innerHTML +
            `<div class="carta ${cartas[i]} ${[i]}" onclick="virarCarta(this);setTimeout(compararCartas, 1000, '${cartas[i]}', '${[i]}')" >
             <img class='costas'   src="assets/imgs/front.png" alt="">
            <img class='frente'  src="assets/imgs/${cartas[i]}.gif" alt="">
         </div>
        `
    }
}


iniciarCartas();

let idInterval;

let lista = [];
function virarCarta(elemento) {
        elemento.firstElementChild.classList.add('esconder');
        elemento.lastElementChild.classList.add('mostrar');
    
    contador++;

    // aqui faz com que o timer só inicie após virar a primeira carta :
    if (contador === 1) {
        idInterval = setInterval(fimJogo, 100);
    }

}


let ar = [];
let array = [];


function compararCartas(parametro, indice) {
    array.push(`.${parametro}`);
    ar.push(`.${indice}`);
    console.log(ar);

    if (array.length >= 3 || ar.length >= 3) {
        ar = [];
        array = [];
    }
    if (array.length === 2) {
        // && ar[0] !== ar[1]
        if (array[0] === array[1] && ar[0] !== ar[1]) {
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
            ar = [];
        }

        else if (ar[0] === ar[1]) {
            ar.pop();
            array.pop();
        }
        // || ar[0] === ar[1]
        else if (array[0] !== array[1]) {
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
            ar = [];
        }

    }
    // AO CLICAR PEGA A CLASSE DA CARTA (CARTA 1, CARTA 2 ETC). PUXAR AS CLASSES COM ARRAY E COMPARAR SE ARRAY[0] === ARRAY[1]
    //  SE FOR FAZER UM TCHUM E DPS RESETAR TUDO JUNTO COM A FUNÇÃO VIRAR CARTA

}


function fimJogo() {
    timer = timer + 0.1;
    const divTimer = document.querySelector('.timer');
    divTimer.innerHTML = timer.toFixed(0);

    cartasCertas = document.querySelectorAll('.mostrar1');
    if (cartasCertas.length === cartas.length) {
        clearInterval(idInterval);
        alert(`Você ganhou em ${contador} jogadas e ${timer.toFixed(0)} segundos!
Recarregue a página para jogar novamente`);

    }
}

function embaralhar() {
    return Math.random() - 0.5;
}