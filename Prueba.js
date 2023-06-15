// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function user(name,lastname,nickname){
    let completeName = name + lastname;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}
    user("alejo,duque,alejod");

    //Condicionales

//     const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }
const tipoDeSuscripcion = "Basic";
if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
};

//Ciclos

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


let i = 0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++;
}

let x = 10;
while(x>=2){
    console.log("El valor de x es: " + x);
    x--;
}

let pregunta = prompt("cuanto es 2 + 2?");
function Question(pregunta){
    if(pregunta != 4){
        alert("Sigue Practicando");
        let pregunta = prompt("cuanto es 2 + 2?");
    }
    else{
    alert("Felicitaciones");
    }
}
Question();

// Array
// Es una coleccion de elementos ordenados segun su posicion en el Array.

//Objeto
// coleccion de elementos que poseen propiedades y se identifican por una clave y valor.

let guitarras = ["gibson","Jackson","fender"];

//Imprime primer elemento del array
 function guitarra(array){
	console.log(array[0]);
}
guitarra(guitarras);

//Listar Array
let list = " ";
guitarras.forEach(allElements);

function allElements(item,index){
    list = item + " " + index;
    console.log(list);
}


var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

//Listar Objetos
Object.entries(myCar).forEach(([key, value]) => {
    let objList = key + ": " + value;
    console.log(objList)
  });






