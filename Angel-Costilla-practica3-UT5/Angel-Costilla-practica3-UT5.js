/*
Ejercicio 1.  Escribir una función MostrarTablaMultiplicar(num).
 La función mostrará por consola la tabla de multiplicar del número introducido:

5x1 = 5
5x2 = 10
5x3 = 15
…

	Después desde el programa principal se pedirá al usuario un número
     y mostrará la tabla de multiplicar de ese número.
*/

document.write(1 + "x" + i + "= " + i);

function escribirTablaMultiplicar(j){
    document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

    document.write("<ul>");
    //i++ --->i=i+1;

    for(i = 1<=10;i++){
        document.write("<li>");
        document.write(j + "x " + i +"= " + j * i);
        document.write("</li>");
    }

    document.write("</ul>");
}

escribirTablaMultiplicar(5);

/*
Ejercicio 2. Escribe una función que pregunte una temperatura en grados C. 
Debe sacar el valor en ºC ,K, y Fh
*/

const celsius = prompt("Introduce un valor:");

const fahrenheit = (celsius * 1.8) + 32

const Kelvin = (fahrenheit - 459)

console.log('${celsius} grados celsius es igual a ${fahrenheit} grados fahrenheit y a ${Kelvin} Kelvin');


/*
Ejercicio 3. Escribe una función que reciba dos números. 
Si el primero es 0 devolverá el mensaje “El primer número es 0,
 no se puede dividir”, si no devolverá la división. 
En el programa principal muestra lo que devuelva.
*/

let numero, division, contador, txt1, txt2;
txt1 = prompt('Introduce un número a dividir');
txt2 = prompt('Y ahora introdcue el divisor');
txt1 = txt1 - txt2;
contador = 0;

if (numero, txt1, txt2 == 0)
    prompt('El cero no se puede dividir ;)');

    else (

    while(txt1 >= 0)
    {
        contador + 1;
        txt1 = txt1 - txt2;
    }
    )
console.log('La division es igual a:');

/*
Ejercicio 4.
 Escribe una función que reciba un número de inicio
  y uno de fin. El módulo ha de mostrar los múltiplos
   de 4 entre esos dos valores.
*/

function multiple(valor ,multiple)
{
    resto = valor % multiple;
    if(resto==0)
    return true;
    else return false;
}

let multiples_1= prompt('Dame un número de inicio');
let multiples_2= prompt('Dame un número de final');

for (var i=1;i<=100;i++)
{
    if(multiples_1(i))
        multiples_2.push(i);

}
document.write('Los multiplos del numero inicial son' multiples_1);
document.write('Los multiplos del numero final son' multiples_2);
