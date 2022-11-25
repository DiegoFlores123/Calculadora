function funciones(funcion){
    if (funcion == "AC"){
        document.getElementById("campo").value = ""
    }
    if (funcion == "%"){
        document.getElementById("campo").value += funcion
    }
    if (funcion == "OFF"){
        document.getElementById("campo").value = "OFF"
    }
}

function numeros(añadir){
    document.getElementById("campo").value += añadir   
}

function simbolos(añadir){
    document.getElementById("campo").value += añadir
}

function resultado(){
    document.getElementById("campo").value = eval(document.getElementById("campo").value)
}