function funciones(funcion){

    if (funcion == "AC"){
        document.getElementById("campo").value = 0
    }
    if (funcion == "%"){
        document.getElementById("campo").value += funcion
    }
    if (funcion == "OFF"){
        document.getElementById("campo").value = ""
    }
}

function numeros(añadir){
    if (document.getElementById("campo").value == 0 && añadir != "."){
        document.getElementById("campo").value = añadir
    }
    else {
        document.getElementById("campo").value += añadir
    }
}

function simbolos(añadir){
    document.getElementById("campo").value += añadir
}

function resultado(){
    document.getElementById("campo").value = eval(document.getElementById("campo").value)
}