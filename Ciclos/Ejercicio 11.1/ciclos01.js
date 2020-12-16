'use strict'

//Ejercicio # 1

/*let num = 0;

while(num<100){
    num = (num+1);
    document.write("<br/>" + num + "<br/>");

}*/

//------------------------->

//Ejercicio # 2

/*let n = 1;
let suma = 0;
let num; 

while(n<=5){
    
    num = prompt('Introduzca numero:', '');

    num = parseInt(num);
    suma = suma  + num;
    n = n + 1;
}
    document.write("La suma de los cinco digitos es:" + suma);*/


//----------------------------->

//Ejercicios de Prueba

/*var n = 0;

while(n<10){
  n=(n+1)
  document.write(n);
}*/

/*var m = 0;

do {
m = (m + 1)
document.write(m)
}while(m!== 10);
document.write("end");*/



/*for (let i = 1; i<=12; i++){
    document.write(i)
    }*/

//----------------------------->

//Ejercicio # 3

/*let calculo = 1;
let acumulador = 0;
let notas; 

while(calculo<=7){
    
    notas = prompt('Introduzca numero:', '');

    notas = parseFloat(notas);
    acumulador = acumulador  + notas;
    calculo = calculo + 1;
}
    document.write("El promedio de las siete calificaciones es de:" + acumulador/7);*/

//------------------------------------->

//Ejercicio # 4

var i = 1; // el inicializador
var n;       
while (i <= i+1) { // la condición
    n = prompt('Introduzca numero:', '');
    n = parseFloat(n);
    document.write(n);
          // el incrementador
}


