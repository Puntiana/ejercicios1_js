//Parte 1. . Objetos

//Ejercicio 1

let estudiante = {
    nombre: "Andrea",
    edad: 22,
    programa: "Programacion",
    semestre: 5
};

console.log(estudiante);

//Ejercicio 2

console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Programa:", estudiante.programa);
console.log("Semestre:", estudiante.semestre);


//Ejercicio 3

estudiante.edad = 23;
estudiante.semestre = 6;
console.log(estudiante);

//Ejercicio 4

estudiante.correo = "andrea@email.com";
estudiante.ciudad = "Guatemala";

console.log(estudiante);

//Ejercicio 5

delete estudiante.ciudad;
console.log(estudiante);

//Ejercicio 6

let computador = {
    marca: "Dell",
    modelo: "Inspiron 15",
    especificaciones: {
        procesador: "Intel Core i5",
        memoriaRAM: "16 GB",
        almacenamiento: "512 GB SSD"
    }
};

console.log("Marca:", computador.marca);
console.log("Modelo:", computador.modelo);
console.log("Procesador:", computador.especificaciones.procesador);
console.log("Memoria RAM:", computador.especificaciones.memoriaRAM);
console.log("Almacenamiento:", computador.especificaciones.almacenamiento);

//Ejercicio 7
// Crear el arreglo de estudiantes
let estudiantes = [
    { nombre: "Juan", edad: 20, promedio: 85 },
    { nombre: "Manuel", edad: 21, promedio: 90 },
    { nombre: "María", edad: 19, promedio: 88 },
    { nombre: "Sandra", edad: 22, promedio: 92 },
    { nombre: "Luisa", edad: 20, promedio: 95 }
];

// Imprimir todos los estudiantes
for (let i = 0; i < estudiantes.length; i++) {
    console.log("Nombre:", estudiantes[i].nombre);
    console.log("Edad:", estudiantes[i].edad);
    console.log("Promedio:", estudiantes[i].promedio);
    console.log("----------------------");
}