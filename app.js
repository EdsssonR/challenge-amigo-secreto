// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
numeroMaximo = 3;

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;
      if (amigo === ""){
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    } else {
    amigos.push(amigo);}
    actualizarLista();
    document.getElementById("amigo").value ="";
    return;
    }


function actualizarLista()
{
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length <= 1) {
        alert("Faltan más amigos para sortear");    
        return;
    }
    else {
        let numeroSorteado =  Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[numeroSorteado];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        return;
    }

}