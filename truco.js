let counter = 0;
let counter2 = 0;
let maximo = 12;

function dupla() {
    reset();
    maximo = 12;
}

function trio() {
    reset();
    maximo = 21;
}

function verificar() {
    if (counter >= maximo) {
        counter = maximo;
        document.querySelector('h1').innerHTML = counter;
        setTimeout(function alertar () {
            alert('Você ganhou');
          }, 75);
}
}

function verificar2() {
    if (counter2 >= maximo) {
        counter2 = maximo;
        document.querySelector('h2').innerHTML = counter2;
        setTimeout(function alertar () {
            alert('Você ganhou');
          }, 75);
}
}

function count() {
    if (counter2 >= maximo || counter >= maximo) {
        return
    }
    counter ++; // counter = counter + 1
    document.querySelector('h1').innerHTML = counter;
    verificar();
}
function menos() {
    if (counter == 0) {
        return;
    }
    counter = counter - 1;
    document.querySelector('h1').innerHTML = counter;
}

function truco() {
    if (counter2 >= maximo || counter >= maximo) {
        return
    }
    counter = counter + 3;
    document.querySelector('h1').innerHTML = counter;
    verificar();
}
function count2() {
    if (counter2 >= maximo || counter >= maximo) {
        return
    }
    counter2 ++; // counter = counter + 1
    document.querySelector('h2').innerHTML = counter2;
    verificar2();
}
function menos2() {
    if (counter2 == 0) {
        return;
    }
    counter2 = counter2 - 1;
    document.querySelector('h2').innerHTML = counter2;
}

function truco2() {
    if (counter2 >= maximo || counter >= maximo) {
        return
    }
    counter2 = counter2 + 3;
    document.querySelector('h2').innerHTML = counter2;
    verificar2();
}

function reset() {
    counter = 0;
    document.querySelector('h1').innerHTML = counter;
    counter2 = 0;
    document.querySelector('h2').innerHTML = counter2;
}