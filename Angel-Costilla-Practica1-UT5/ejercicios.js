/*
Ejercicio 1. Escribe un programa que indique si una persona 
está jubilada (con edad igual o superior a 65 años), solicitando su fecha 
de nacimiento expresada en día, mes y año (Dnac, Mnac y Anac) y la fecha actual
 expresada en día, mes y año (Dact, Mact y Aact).
 */

 //con fecha número-entero//
 /*facil*/

var edad= prompt("Introduce tu edad");
{
   
    if (edad > 65);
    document.write("Eres un vespa ;)");


    else if (edad < 65 );
    
}
else if
{
    alert("Aún te queda");
}





/*
Ejercicio 2. Escribe un programa que evalúe si una cadena termina en 0 o en 7.
*/




var cadena = prompt("Introduce una cadena de texto");
var numpal = cadena.length;

window.write("Termina en" + numpal )
/*
Ejercicio 3. Supón que trabajas en un pequeño negocio familiar de imprenta. 
El gerente te pide que escribas un programa que calcule el salario semanal 
de un trabajador de acuerdo a las siguientes condiciones: un empleado
 introducirá el nombre del trabajador, el número de horas que ha trabajado 
(no están permitidas las horas extras) y el precio hora que cobra el trabajador. 
Tu programa deberá calcular el Impuesto de Hacienda que se le retiene (un 20 por 
ciento del salario bruto) y el Impuesto de la Seguridad Social (un 8 por ciento
 del salario bruto). 
 */

 var empleado= prompt("Introduce tu nombre de empleado");
 var horas= Number(prompt("¿Cuántas horas has trabajado ésta semana?"));
 //limitar a 40h con max?//
 var preu= Number(prompt("¿A cuanto cobra la hora trabajada?")); 
 hacienda || (- 20);
 ssSs || (- 8);

 
 salarioBruto=(horas * preu);
 salarioNeto=(salarioBruto - hacienda - ssSs);
 impuestos=(salarioBruto - salarioNeto);

 window.alert("Resumen de sueldo para " + empleado
                "horas trabajadas:" + horas
                "Precio de cada hora trabajada": + preu
                "Los impuestos de éste mes" + impuestos
                "El salario asciende a" + salarioNeto);




                function masIva(precio, iva){
                    iva = iva || 20
                    var coniva = (precio + precio*iva/100);

                }
////////
                var precio = Number(prompt("Introduce un precio"));
                var iva = Number(prompt("Introduce el iva"));
                if(iva > 0){
                    var resultado = masIva(precio, iva);
                }
                else{
                    var resultado = masiva(precio);
                }
                document.write("Precio sin iva: " + precio);
                    document.write("Precio más iva: " + resultado);

    

/*Ejercicio 4. Una empresa de golosinas desea utilizar un programa 
para determinar cuantos caramelos caben en una bolsa de un 
determinado peso. Los caramelos pesan 10, 20 y 40 gramos. 
El programa debe solicitar si quiere introducir 1 kilo, 2 kilos 
o 3 kilos, e indicar la cantidad máxima de caramelos que debe introducir 
(intenta rellenar introduciendo el máximo de caramelos de 40, después 
de 20 y por último de 10).
*/

var candyA=10;
var candyB=20;
var candyC=30;

var KGA = math.max(1000);
var KGB = math.max(2000);
var KGC = math.max(3000);


var bolsa =prompt("Indica una cantidad (1Kg, 2Kg, 3Kg): ");
document.write("En ésta bolsa entran" + )

//NIIIIIIDEA


var importe=prompt("Indica una cantidad: ");
document.write("El total de caramelos que entran es" );
//las cantidaddes de los caramelos
let candy =Array(10,20,30);

for(var i=0; i<candy.length; i++)
{
    if(bolsa>=candy[i])
    {
        bolsa[i]=parseInt(bolsa/candy[i]);
        bolsa=(bolsa-(bolsa[i]*candy[i])).toFixed(3);

    }
}

for(i=0; i<bolsa.length; i++)
{
    if(candy[i]>0)
    {
        if()
    }
}

/*Ejercicio 5. El propietario de una compañía de software te ha pedido 
que escribas un programa que calcule la bonificación de final de año 
de sus empleados. La bonificación anual de la compañía está basada en 
el rendimiento del trabajo y en el salario anual de cada empleado. El 
rendimiento es como sigue:
Rendimient o	Bonificación
1	6% del salario anual
2	4% del salario anual
3	2% del salario anual
Cualquier otro
número	Ninguna
El programa deberá permitir al gerente introducir el salario y el
 rendimiento de cada empleado. El programa deberá mostrar la siguiente
  salida: salario, rendimiento y bonificación. 
*/


    var salarioAnual = Number.prompt("Introduce el salario anual");
    var rendi = Number.prompt("Introduce el renidmiento: 1 2 3:");
    salario = salarioAnual / 12;
    {
        {
        if (rendi = 1);
        }
        {
        bonificacion = salarioAnual + (rendi * ( 6 / 100);
        if (rendi = 2);
        }
        {
        bonificacion = salarioAnual + (rendi * ( 4 / 100);
        }
        {
        if (rendi = 1);
        bonificacion = salarioAnual + (rendi * ( 2 / 100);
        }
        

    } 
    console.log("El salario es "salario", el rendimiento es de "rendi" y la bonificacion es de "bonificacion);


    

    

    
    





////

    
var salario= Number.prompt("Introduce el salario");
var rendi= Number.prompt("Introduce el rango de rendimiento 1,2,3");

{    
    if (rendi ="1");
    {
       boni=(sueldo * rendi );
       window.alert(salario, rendi, boni)
    }
    else if (rendi ="2");
    {
       boni=(sueldo * [rendi * 2]);
       window.alert(salario, rendi, boni)
    }
    else if (rendi ="3");
    {
       boni=(sueldo * [rendi * 3]);
       window.alert(salario, rendi, boni)
    }
    else if (rendi =>"4");
        window.alert("Introduce un número válido");
}

/*Ejercicio 6.Una compañía de cable suministra a su comunidad
 una conexión de televisión por cable. La compañía ha cambiado
  frecuentemente el número asignado a los canales. Escribe un 
  programa que permita al usuario escribir los números de los canales
   para encontrar la estación asignada.Los canales asignados son los siguientes:
Número	 
canal	del Nombre	 
estación	de	 	la
2	WBBM		
5	WMAQ		
7	WLS		
9	WGN		
11	WTTW		
40	AE		
41	AMC		
36	CNN		
99	DIS		
33	ESPN		
15	HBO		
26	MAX		
18	QVC		
*/



let cadenas = []prompt("Introduce el número del canal que quieres buscar");

posicion = cadenas.indexOf("2,5,7,9,11,40,41,36,99,33,15,26,18");



cadenas[2] = "WBBM";
cadenas[5] = "WMAQ";
cadenas[7] = "WLS";
cadenas[9] = "WGN";
cadenas[11] = "WTTW";
cadenas[40] = "AE";
cadenas[41] = "AMC";
cadenas[36] = "CNN";
cadenas[99] = "DIS";
cadenas[33] = "ESPN";
cadenas[15] = "HBO";
cadenas[26] = "MAX";
cadenas[18] = "QVC";


while ( posicion != -1 ) {
    cadenas++;
    posicion = miCadena.indexOf("x",posicion+1);
 {

console.log ("El canal para ésta cadena es" + cadenas);
}





























