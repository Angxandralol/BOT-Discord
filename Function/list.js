const list = [];

function añadirList(numero) {
    if(!numero) return 0;
    list.push(numero);
    if (list[list.length]===numero) return 1; //todo fue bien
    else return 0; //todo fue mal
}

function borrarList() {
    while (list.length!=0) {
        let borrado = list.pop();
    }
    if (list[0]) return 0; //todo mal
    else return 1; //todo bien
}

function mostrarList() {
    if (list.length!=0) {
        let length = list.length;
        let index = 0;
        while (index<length) {
            console.log(list[index]);
            index++;
        }
    } else {
        console.log("La lista está vacía");
    }
}

module.exports = { list, añadirList, borrarList, mostrarList }