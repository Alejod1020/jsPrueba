// document.querySelector("input");

// const h1=document.querySelector('h1');
// const p=document.querySelector('p');
// const parrafito=document.getElementsByClassName('parrafito');
// const pid=odcument.getElementById('pid');
// const input=document.querySelector('input');
// console.log(input.value);
// console.log({h1,p,parrafito,pid,input,});
// h1.innerHTML='Patito <br> Feo';
// h1.innerText='Patito <br> Feo';
// h1.classList.add('rojo');
// h1.classList.remove('verde');
// input.value="456"
// const img=document.createElement('img');//creamos un elemento imagen
// img.setAttribute('src','https://static.platzi.com/static/images/conf/logo_black@2x.png');//le añadimos el src de la fuente de la imagen 
// console.log(img);//imprimimos la imagen en consola
// pid.innerHTML=""; //elimina el comtenido de ese parrafo
// pid.appendChild(img);//agrega la imagen al parrafo de html


//const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}