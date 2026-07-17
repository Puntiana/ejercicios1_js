function sumar(a,b){
    let respuesta = Number(a)+Number(b);
    return respuesta;
}

function restar(a,b){
    let respuesta = Number(a)-Number(b);
    return respuesta;
}

function multiplicar(a,b){
    let respuesta = Number(a)*Number(b);
    return respuesta;
}

function dividir(a,b){
    let respuesta = Number(a)/Number(b);
    return respuesta;
}

do {    
    var opcion = Number(prompt("Ingrese la opcion: 1.Sumar, 2.Restar, 3.Multiplicar, 4.Dividir, 5.Salir"));
    switch (opcion){
        case 1:
            console.log (sumar(prompt("Ingrese el primer valor"), prompt("Ingrese el segundo valor")));
            break;
        case 2:
            console.log (restar(prompt("Ingrese el primer valor"), prompt("Ingrese el segundo valor")));
            break;
        case 3:
            console.log (multiplicar(prompt("Ingrese el primer valor"), prompt("Ingrese el segundo valor")));
            break;
        case 4:
            console.log (dividir(prompt("Ingrese el primer valor"), prompt("Ingrese el segundo valor")));
            break;
        case 5:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida")
    }
} while (opcion != 5);