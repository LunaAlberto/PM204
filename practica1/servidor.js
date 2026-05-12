console.log("hola mundo js desde el servidor")
//no necesitamos enlaxarlo a algun html solo es decirle a note que lo ejecute

/* promedio 2 variables */
let edad1=13
let edad2=13
console.log("edad promedio")
console.log((edad1+edad2)/2)

//let variables y const constantes

/*medir tiempo de procesos*/


console.time("mi proceso")

for(let i=0; i<1000000000; i++){

}

console.timeEnd("mi proceso")

/*objetivos tipo tabla*/
//arreglo de usuarios que este contendra objetos con nombre y edad
let usuarios=[
    {nombre:"alberto", edad:20},
    {nombre:"lalo", edad:20},

]

//impimimos el arreglo de usuarios 
console.table(usuarios)