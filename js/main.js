let mostrar = document.getElementById("mostrar");
let numeros = document.getElementsByClassName("Numero");
let funcion = document.getElementsByClassName("funciones");
let total = document.getElementById("total");

let condicion = true;
let variableOperador = "";
let variableSuma1 = "";
let variableSuma2 = "";
function metodo(entrada) {        
    for (let i = 0; i < entrada.length; i++) {
        entrada[i].addEventListener("click", () => {
            // alert(Number(entrada[i].value));
            mostrar.value += Number(entrada[i].value);
            if (condicion == true) {
                variableSuma1 = mostrar.value;
            } else {
                variableSuma2 = mostrar.value;
            }
        }
        )
    };
};

function operadores(entrada) {

    for (let i = 0; i <= 3; i++) {
        entrada[i].addEventListener("click", () => {
            mostrar.value = "";
            variableOperador = entrada[i].value;

            condicion = false;
        });
    };
};

function mostrarMierda(entrada1, operador, entrada2) {

    console.log(entrada1+"--> este deberia estar llena");
    
    // let entrada01 = parseInt(entrada1);
    // let entrada02 = parseInt(entrada2);

    // console.log("xxxx"+entrada1.value);
    // console.log("xxxx"+entrada02);
    // console.log("xxxx"+operador);
    

    mostrar.value = eval (entrada1+ operador+ entrada2);
   

    condicion = true;
}
metodo(numeros);
operadores(funcion);

total.addEventListener("click", () => {
    console.log(variableSuma1)
    console.log(variableSuma2)
    console.log(variableOperador)
    mostrarMierda(variableSuma1, variableOperador, variableSuma2);
});
