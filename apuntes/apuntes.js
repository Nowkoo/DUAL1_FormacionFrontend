let parrafos1 = document.getElementsByTagName("p");
let parrafos2 = document.getElementsByClassName("parrafo");
let parrafoEspecial = document.getElementById("parrafoEspecial");
parrafoEspecial.textContent = 'Hola mundo!';

/*VARIABLES
-var: debilmente tipado, se desaconseja su uso
-let: para variables que pueden cambiar a lo largo del script
-cons: constantes que solo cambian cuando son definidas
*/

for (let i=0; i < parrafos1.length; i++) {
    console.log(parrafos1[i].textContent);
}

/*QUERY SELECTOR ONE Y ALL
Puedes pasarle un elemento, un id o el nombre de una clase*/
let unParrafo = document.querySelector("p");
let todosLosParrafos = document.querySelectorAll("p");

let nuevoNodo = document.createElement("p");
nuevoNodo.setAttribute("id", "nuevoParrafo");
let nuevoContenido = document.createTextNode("Adios");
nuevoNodo.appendChild(nuevoContenido);
document.querySelector("body").appendChild(nuevoNodo);

let parrafoBoton = document.querySelector("#parrafo_boton");
document.querySelector("body").insertBefore(nuevoNodo, parrafoBoton);

document.querySelector("#pulsa").addEventListener("click", ()=>{
    document.querySelector("#nuevoParrafo").remove();
    document.querySelector("p").classList.add("yellow");
});

document.querySelectorAll("button").forEach((element)=>{
    element.addEventListener("click", (e)=> {
        document.querySelector("p").setAttribute("class", `pulsa ${e.target.getAttribute("id")}`)
    })
});

/*VALIDACIONES
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation*/
document.querySelector("#name").addEventListener("input", (event) => {
    if (event.target.validity.patternMismatch) {
        event.target.setCustomValidity("No has escrito tu nombre");
    } else {
        event.target.setCustomValidity("");
    }
})

/*Para detener el envio de un formulario*/
document.querySelector("#miform").addEventListener("submit", (event)=> {
    event.preventDefault();
})

let invalidLengthMessage = document.createElement("p");
invalidLengthMessage.setAttribute("id", "lengthMessage");
let invalidLengthMessageText = document.createTextNode("El mensaje tiene un tamaño máximo de 9 caracteres.");
invalidLengthMessage.appendChild(invalidLengthMessageText);

let invalidPatternMessage = document.createElement("p");
invalidPatternMessage.setAttribute("id", "patternMessage");
let invalidPatternMessageText = document.createTextNode("El mensaje no sigue un patrón válido.");
invalidPatternMessage.appendChild(invalidPatternMessageText);

const inputNombre = document.querySelector("#name2");

inputNombre.addEventListener("input", (event)=> {
    let lengthMessageError, patternMessageError;
    if (event.target.value.length > 9) {
        event.target.insertAdjacentElement("afterend", invalidLengthMessage);
    } else {
        lengthMessageError = document.querySelector("#lengthMessage");
        if (lengthMessageError) lengthMessageError.remove();
    }

    if (event.target.validity.patternMismatch) {
        event.target.insertAdjacentElement("afterend", invalidPatternMessage);
    } else {
        patternMessageError = document.querySelector("#patternMessage");
        if (patternMessageError) patternMessageError.remove();
    }
})
