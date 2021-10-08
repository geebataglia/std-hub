var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        //Busca informações no form para adicionar um novo paciente
        var form = document.querySelector("#form-adicionar");
        //Varre informações do paciente dentro dos campos do formulário
        var paciente = obtemPacienteDoFormulario(form);
        //Cria uma linha separada por colunas das informações digitadas
        var novoPaciente = montarTabela(paciente);
        //Adiciona na tabela as informações coletadas
        var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(novoPaciente);
            form.reset();
    });

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montarTabela(paciente){
    var novoPaciente = document.createElement("tr");
    novoPaciente.classList.add("paciente");

    novoPaciente.appendChild(fillTabela(paciente.nome, "info-nome"));
    novoPaciente.appendChild(fillTabela(paciente.peso, "info-peso"));
    novoPaciente.appendChild(fillTabela(paciente.altura, "info-altura"));
    novoPaciente.appendChild(fillTabela(paciente.gordura, "info-gordura"));
    novoPaciente.appendChild(fillTabela(paciente.imc, "info-imc"));

    return novoPaciente
}

function fillTabela(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td
}
