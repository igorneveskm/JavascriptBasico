// Criamos um array para armazenar os objetos de pessoas cadastradas.
const peopleList = [];

// Obtemos uma referência ao formulário HTML com o ID "personForm".
const form = document.getElementById("personForm");

// Adicionamos um evento de escuta para o evento "submit" do formulário.
form.addEventListener("submit", function (e) {
    // Impedimos o comportamento padrão de envio do formulário.
    e.preventDefault();

    // Obtemos os valores dos campos de entrada do formulário.
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;

    // Criamos um novo objeto de pessoa com os valores do formulário.
    const newPerson = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

    // Adicionamos o novo objeto de pessoa ao array de pessoas cadastradas.
    peopleList.push(newPerson);

    // Chamamos a função para exibir todas as pessoas cadastradas.
    displayAllDetails();
});

// Função para exibir todas as pessoas cadastradas na tabela HTML.
function displayAllDetails() {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Limpa o conteúdo atual da tabela.

    // Loop através do array de pessoas cadastradas e cria as linhas da tabela.
    for (let i = 0; i < peopleList.length; i++) {
        const person = peopleList[i];
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell2.textContent = person.firstName;
        cell3.textContent = person.lastName;
        cell4.textContent = person.age;
    }
}


$(document).ready(function () {
    // Adicionando máscara ao campo de telefone
    $("#telefone").mask("(00)00000-0000");

    // Adicionando máscara ao campo de CPF
    $("#cpf").mask("000.000.000-00");

    // Adicionando máscara ao campo de data de nascimento
    $("#dataNascimento").mask("00/00/0000");
});

function validarFormulario() {
    const nome = $("#nome").val();
    const email = $("#email").val();
    const dataNascimento = $("#dataNascimento").val();
    const telefone = $("#telefone").val();
    const cpf = $("#cpf").val();

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        return false;
    }

    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Email inválido. Por favor, insira um email válido.");
        return false;
    }

    if (dataNascimento === "" || !validardata(dataNascimento)) {
        alert("Por favor, preencha o campo Data de Nascimento.");
        return false;
    }
    

    if (telefone === "" || !validarTelefone(telefone)) {
        alert("Por favor, preencha o campo Telefone.");
        return false;
    }

    if (cpf === "" || !validarCPF(cpf)) {
        alert("CPF inválido. Por favor, insira um CPF válido.");
        return false;
    }

    return true;
}

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarCPF(cpf) {
    // Verifica se o CPF está no formato correto
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

function validardata (dataNascimento){
    // Verifica se a data de nascimento está no formato correto (DD/MM/YYYY)
    const regexData = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return regexData.test(dataNascimento);
}

function validarTelefone(telefone) {
    // Verifica se o telefone está no formato correto
    return /^\(\d{2}\)\d{5}-\d{4}$/.test(telefone);
}