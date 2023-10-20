let nombre = prompt("Ingrese su nombre de usuario")
let tarjeta = parseInt(prompt("Digite su numero de tarjeta"))
let clave = parseInt(prompt("Digite su clave"))
const t = 1107837900
const c = 2130
const e = 100000
let r;
if(tarjeta == t && clave == c){
    alert("Las credenciales son correctas")
    let efectivo = parseInt(prompt(nombre + " digite la cantidad de retiro" + "\n" + "Usted tiene: 100.000 pesos"));
    if (e >= efectivo){
        r = e - efectivo
        alert("Puedo darte tu dinero")
        alert("La cantidad de retiro fue " + efectivo + "\n" + "Su cuenta quedo con: " + r)
    }else{
        alert("No puedo darte tu dinero")
    }
}else{
    alert("!Las credenciales son incorrectas!")
}