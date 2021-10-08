var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

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

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(altura <= 0 || altura >= 2.50){
        alturaEhValida = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(peso <= 0 || peso >= 400){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imcCalc = 0;
    imcCalc = peso / (altura * altura);
    return imcCalc.toFixed(2);
}