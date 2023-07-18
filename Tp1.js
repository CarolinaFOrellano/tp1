/* Nos piden crear una matriz de 4×4 de números enteros que inicialmente esta vacía, nos piden hacer un menú con estas opciones:
Rellenar TODA la matriz de números, debes pedírselo al usuario.
Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
Suma de una columna que se pedirá al usuario (controlar que elija una correcta)
Sumar la diagonal principal (ver ejemplo)
Sumar la diagonal inversa (ver ejemplo)
La media de todos los valores de la matriz
IMPORTANTE: hasta que no se haga la primera opción, el resto de opciones no se deberán de ejecutar, simplemente mostrar un mensaje 
donde diga que debes rellenar la matriz. */

//crear una matriz de 4×4 de números enteros que inicialmente esta vacía:
let matriz;
// La funcion "crearMatriz4x4" le pide al usuario ingresar numeros para rellenar las filas y columnas de la matriz de 4x4
function crearMatriz4x4() {
    let matriz = [];
    for (let i = 0; i < 4; i++) {
        let fila = [];
        for (let j = 0; j < 4; j++) {
            // Voy a usar la funcion pedirNumeroUsuario que cree para corroborar si el valor ingresado es o no un numero.
            let numero = pedirNumeroUsuario("ingrese un numero para rellenar la matriz: [" + i + "] [" + j + "]:");
            fila.push(numero)
        }
        matriz.push(fila)
    }
    console.table(matriz);

    return matriz;
}



//La funcion pedirNumeroUsuario va a corroborar que el valor ingresado por el usuario sea un numero o no.
function pedirNumeroUsuario(mensaje) {
    let numero
    do {
        numero = parseInt(prompt(mensaje));
        if (isNaN(numero)) {
            alert("El valor ingresado no es un numero, por favor ingrese un numero")
        }
    } while (isNaN(numero)) //mientras el numero sea no es un numero (NaN), le seguire pidiendo al usuario que ingrese un numero 
    return numero;
}


//Suma de una fila que se pedirá al usuario (controlar que elija una correcta)
//La funcion sumarFila le va a pedir al usuario un numero de fila y va a sumar sus elementos. En caso de que ingrese un numero de fila que no corresponda los parametros le mostrara un mesaje de error.
function sumarFila() {
    let filaElegida = pedirNumeroUsuario("Ingrese el número de la fila que desea sumar");

    if (filaElegida < 0 || filaElegida >= matriz.length) {
        console.log("El numero de fila ingresado es incorrecto");
        return;
    }

    let suma = 0;
    for (let j = 0; j < matriz[filaElegida].length; j++) {
        suma += matriz[filaElegida][j];
    }

    return suma;
}


//Suma de una columna que se pedirá al usuario (controlar que elija una correcta) 
//La funcion sumaColumna le va a pedir al usuario un numero de columna y va a sumar sus elementos. En caso de que ingrese un numero de columna que no corresponda los parametros le mostrara un mesaje de error
function sumarColumna() {
    let columnaSeleccionada = pedirNumeroUsuario("Ingrese el número de columna que desea sumar (0-" + (matriz[0].length - 1) + "):");

    if (columnaSeleccionada < 0 || columnaSeleccionada >= matriz[0].length) {
        console.log("Columna inválida. Debe ser un número entre 0 y " + (matriz[0].length - 1));
        return;
    }

    let suma = 0;
    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][columnaSeleccionada];
    }

    return suma;
}

//Sumar la diagonal principal (ver ejemplo)
// la funcion sumarDiagonalPrincipal recorre la matriz en diagonal sumando los elementos que se encuentran en la misma posición de fila y columna. 
function sumarDiagonalPrincipal(matriz) {
    let suma = 0;

    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].length <= i) {
            break; 
        }
        suma += matriz[i][i];
    }

    return suma;
}

//Sumar la diagonal inversa (ver ejemplo)
//la funcion sumarDiagonalInversa recorre la matriz en diagonal inversa que al comenzar en matriz.length - 1 me indica donde comienza..
function sumarDiagonalInversa(matriz) {
    let suma = 0;
    let j = matriz.length - 1;

    for (let i = 0; i < matriz.length; i++) {
        suma += matriz[i][j];
        j--;
    }

    return suma;
}

//La media de todos los valores de la matriz 
//La funcion calcularMedia me va a sumar la totalidad de los elementos de la matriz 
function calcularMedia(matriz) {
    let total = 0;
    let cantidadElementos = 0;
  
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        total += matriz[i][j];
        cantidadElementos++;
      }
    }
  
    return total / cantidadElementos;
  }
//Voy a armar la funcion principal llamada menu usando swich case, completando cada opcion con la funcion correspondiente. 
//utilizo el if para corroborar que lo primero que hga el usuario sea crear la matriz, caso contrario le mostrara un alert para que lo complete 
function menu() {
    let opcion;
    do { 
        opcion = parseInt(
            prompt(
                "Ingrese una opción:\n" + "1- CREAR MATRIZ\n" + "2- SUMAR FILA\n" + "3- SUMAR COLUMNA\n" + "4- SUMAR DIAGONAL PRINCIPAL\n" + "5- SUMAR DIAGONAL INVERSA\n" + "6- CALCULAR LA MEDIA\n" + "0- SALIR"));
        switch (opcion) {
            case 1:
                matriz = crearMatriz4x4();
                break;
            case 2:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaFila = sumarFila();
                    console.log("La suma de los elementos de la fila seleccionada es: " + sumaFila);
                }
                break;
            case 3:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaColumna = sumarColumna();
                    console.log("La suma de los elementos de la columna seleccionada es: " + sumaColumna);
                }
                break;
            case 4:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaDiagonalPrincipal = sumarDiagonalPrincipal(matriz);
                    console.log("La suma de los elementos de la diagonal principal es: " + sumaDiagonalPrincipal);
                }
                break;
            case 5:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaDiagonalInversa = sumarDiagonalInversa(matriz);
                    console.log("La suma de los elementos de la diagonal inversa es: " + sumaDiagonalInversa);
                }
                break;
            case 6:
                if (matriz == undefined) {
                    alert("Debe completar la opcion N1")
                } else {
                    let sumaMedia = calcularMedia(matriz);
                    console.log("La media de los elementos de la matriz es: " + sumaMedia);
                }
                 break;
            case 0:
                console.log("Saliendo");
                break;
            default:
                console.log("Opción no válida");
                break;
            } 
        }while (opcion !== 0);
    
}
menu();
