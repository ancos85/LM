<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UT5-2t</title>
</head>
<body>
    <script>
        /*
        Ejercicio 1. Programa que calcula y escribe la suma y el producto de los X primeros números naturales.
        */

        let numero=0
        let num=0
        let suma=0
            while(numero<10)
        {
            if(num%2==0)
            {
                suma=suma+num;
                numero=numero+1;

            }
            num=num+1;
        document.write(suma);
        }

        /*
Ejercicio 2. Programa que lee 100 números y cuenta cuántos de ellos
 son positivos (n > 0).
*/
int num, positivo, negativo, cero, cant,i
positivo=0;
negativo=0;
cero=0;
let cout= prompt("Introduce la cantidad de números"));
cin>>cant;
for(i=1 i<=cant;i++)
{
    prompt("Introduce numero entero");
    if (num>0)
}

/*
Ejercicio 3. Programa que lea números hasta que se de un cero y escriba la media de los números leídos. Ejemplo de ejecución:
4 6 8 2 0 Media = 5
*/

function ArrayAvg(myArray)
{
    let i = 0, summ = 0, ArrayLen = myArray.lenght;
    while (i < ArranyLen)
    {
        summ = summ +myArray[i++];
    }
    let myArray = [1, 5, 2, 3, 7];
    let a= ArraAvg(myArray);
    console.log(a)
}


/*Ejercicio 4 . Programa que lee una secuencia de notas (con valores que van de 0 al 10)
 que termina con el valor -1 y nos dice si hay algún 10 entre ellas.*/


 let contador = 10;
 let numUsu = prompt("Introduce un numero");
 
 while (numUsu != 10);
 {
    alert("Sigue intentandolo, te queda un intento menos"(contador - 1));
       
  } else {
      (numUsu == 10);
      {alert("Acertaste")}
  } else if {
      (contador <0);
      {alert("Perdiste")}
    }

   /*
   Ejercicio 5. Programa que pregunte cuánto dinero vas a pagar.
    Hasta que el usuario introduzca una s siguie preguntando.
    Si vas a pagar menos de 50 euros, optas a habitaciones tipo 1,
    si vas a pagar entre 50 y 100 optas habitaciones tipo 2,
    entre 100 y 150 habitaciones tipo 3 y más de esa cantidad suite.
    */

    
    let pagar = prompt("¿Cuanto vas a pagar por la habitacion?");
        if (pagar <= 49){
             alert("Optas a habitaciones tipo 1");
    } else (pagar <=99){
             alert("Optas a habitaciones tipo 2");

    } else (pagar <=149){
             alert("Optas a habitaciones tipo 3");
    } else if (pagar >=150){
            alert("Por favor elije una suite");
       }
    }


    /*Ejercicio 6. Programa que reciba números positivios y
     finalmente nos indicque cuál es el mayor.*/

     let a = prompt("Introduce un número");
     let b = prompt("Y otro mas");
     
        if ( a <= b){
            alert(a"es mayor que "b);
        } else ( a >= b) {
            alert(b"es mayor que "a);
        } else if (a === b) {
            alert(a"es igual que"b);
        }
            
        }




    </script>
</body>
</html>








