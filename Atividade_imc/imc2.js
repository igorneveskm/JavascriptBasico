function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
        resultado= "voce esta magro com esse indice: " + calculo
    }
    if(calculo>=18.5 && calculo<24.9){
        resultado= "voce esta normal com esse indice: " + calculo
    }
    if(calculo>=25 && calculo<24.9){
        resultado="voce esta sobre peso com esse indice: " + calculo
    }
    if(calculo>=30 && calculo<39.9){
        resultado="voce esta com obsidade esse indice: " + calculo
    }
    if(calculo>40){
        resultado= "voce esta com obsidade grave esse indice: " + calculo
    }

    document.getElementById('resul').innerHTML = resultado
}