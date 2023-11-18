/*const edad = prompt ("Ingresa la opción correspondiente a tu edad")
console.log(edad)*/

const perfil = [
    {id: 0, inversor: 'Averso al riesgo', recomendacion: 'Le aconsejamos llevarse los dólares al colchón'},
    {id: 1, inversor: 'Conservador', recomendacion: 'Le aconsejamos bonos investment grade y fondos de money market'},
    {id: 2, inversor: 'Moderado', recomendacion: 'Le aconsejamos una cartera de acciones del S&P 500'},
    {id: 3, inversor: 'Agresivo', recomendacion: 'Le aconsejamos invertir en Hedge Funds'}
]

console.table(perfil)

function analizarPerfil(res){
    if (res <=6){
        const inversor = 0
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        console.log(mensaje)
        alert ("Su perfil de inversor es" + mensaje.inversor + mensaje.recomendacion)
    }
    else if (res <= 12){
        const inversor = 1
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        console.log(mensaje)
        alert ("Su perfil de inversor es" + mensaje.inversor + mensaje.recomendacion)
        
    }
    else if (res <= 18){
        const inversor = 2
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        console.log(mensaje)
        alert ("Su perfil de inversor es" + mensaje.inversor + mensaje.recomendacion)
        
    }
    else if (res <= 24){
        const inversor = 3
        let mensaje = perfil.find((perfil) => perfil.id === inversor)
        console.log(mensaje)
        alert ("Su perfil de inversor es" + mensaje.inversor + mensaje.recomendacion)
       
    }
    else{
        alert ("los datos ingresados no son válidos")
    }
 }
function calcularPerfil(){
    let comenzarTest = true

    while (comenzarTest){
   
    /*let edad = parseInt(prompt ("Ingresa la opción correspondiente a tu edad"))
    let conocimiento = parseInt(prompt("Ingresa la opción correspondiente a tu conocimiento del mercado"))
    let ahorro = parseInt(prompt("Ingresa la opción correspondiente al % de tus ingresos ahorrado mensualmente"))
    let destino = parseInt(prompt("Ingresa la opción correspondiente al % de tus ahorros que podrías invertir"))
    let tiempo = parseInt(prompt("Ingresa la opción correspondiente al tiempo que mantendrías tu inversión"))
    let objetivo = parseInt(prompt("Ingresa la opción correspondiente al tu objetivo de inversión"))

    
   let resultado = edad + conocimiento + ahorro + destino + tiempo + objetivo*/


   const preguntas = [
    "Ingresa la opción correspondiente a tu edad",
    "Ingresa la opción correspondiente a tu conocimiento del mercado",
    "Ingresa la opción correspondiente al % de tus ingresos ahorrado mensualmente",
    "Ingresa la opción correspondiente al % de tus ahorros que podrías invertir",
    "Ingresa la opción correspondiente al tiempo que mantendrías tu inversión",
    "Ingresa la opción correspondiente al tu objetivo de inversión"

   ]

   const resultado = preguntas.reduce((acumulador, pregunta) => {
    const respuesta = parseInt(prompt(pregunta));
    return isNaN(respuesta) ? acumulador : acumulador + respuesta;
   },0)

    if (resultado !== '' && resultado !== null){
        analizarPerfil(resultado)
        
    }else{
        console.warn("los datos no son válidos")
    }

    comenzarTest = confirm ("Desea modificar su elección?")
    console.log(resultado)
    }
    
}

