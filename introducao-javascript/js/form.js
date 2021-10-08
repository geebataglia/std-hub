var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();
        //Busca informações no form para adicionar um novo paciente
        var form = document.querySelector("#form-adicionar");
        //Varre informações do paciente dentro dos campos do formulário
        var paciente = obtemPacienteDoFormulario(form);
        //Cria uma linha separada por colunas das informações digitadas
        var novoPaciente = montarTabela(paciente);

        var erros = validaPaciente(paciente);
        
        if(erros.length > 0){
            showMsgErro(erros);
            return;
        }
        //Adiciona na tabela as informações coletadas
        var tabela = document.querySelector("#tabela-pacientes");
            tabela.appendChild(novoPaciente);
            form.reset();
            var msgErro = document.querySelector("#msg-erros");
            msgErro.innerHTML = "";
    });

function showMsgErro(erros){
    var ul = document.querySelector("#msg-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome precisa ser preenchido!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    } 
    
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    } 

    if(paciente.gordura.length == 0){
        erros.push("Campo de %gordura é obrigatório!");
    }

    if(paciente.peso.length == 0){
        erros.push("Campo de peso é obrigatório!")
    }
    if(paciente.altura.length == 0){
        erros.push("Campo de altura é obrigatório!")
    }

    return erros;
}