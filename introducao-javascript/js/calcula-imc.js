var titulo = document.querySelector(".titulo");
titulo.textContent = "Rafaelita Nutricionista";

// Busca Paciente

var tabPaciente = document.querySelectorAll(".paciente");

for(var i = 0; i < tabPaciente.length; i++){
    
    var paciente = (tabPaciente[i]);

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

// Calculo de IMC

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    // Os if's abaixo somente vão existir para dados importados ou ja existentes. 
    if(!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 400){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 2.50){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imcCalc = 0;
    imcCalc = peso / (altura * altura);
    return imcCalc.toFixed(2);
}