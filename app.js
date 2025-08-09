let amigos = [];

function agregarAmigo() {
   
    let nombreDeAmigo = document.getElementById("amigo").value;

    if (nombreDeAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        
        amigos.push(nombreDeAmigo);

        MostrarAmigo(amigos);
        
        limpiarCaja();
    }
}

function MostrarAmigo(amigos = []) {
    let lista = "";

    for (let amigo of amigos) {
        lista += `<li>${amigo}</li>`;
    }

    document.getElementById("listaAmigos").innerHTML = lista;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("La lista esta vacia");
    } else {
        let AmigoSorteado= Math.floor(Math.random() * amigos.length);

        document.getElementById("resultado").innerHTML = `<li>${amigos[AmigoSorteado]}</li>`
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}