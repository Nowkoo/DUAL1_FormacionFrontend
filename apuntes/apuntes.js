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