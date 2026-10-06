import { salvarCadastro, carregarCadastro } from "./storage.js";

export function configurarCadastro() {

    const formulario = document.getElementById("form-cadastro");
    const mensagem = document.getElementById("mensagem-sucesso");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        if (formulario.checkValidity()) {

            const dadosCadastro = {
                nome: document.getElementById("nome").value,
                cpf: document.getElementById("cpf").value,
                email: document.getElementById("email").value,
                nascimento: document.getElementById("nascimento").value,
                endereco: document.getElementById("endereco").value,
                cidade: document.getElementById("cidade").value,
                estado: document.getElementById("estado").value,
                cep: document.getElementById("cep").value,
                telefone: document.getElementById("telefone").value
            };

            salvarCadastro(dadosCadastro);

            mensagem.style.display = "block";
        }
    });

    const dadosCadastro = carregarCadastro();

    if (dadosCadastro) {

        document.getElementById("nome").value = dadosCadastro.nome;
        document.getElementById("cpf").value = dadosCadastro.cpf;
        document.getElementById("email").value = dadosCadastro.email;
        document.getElementById("nascimento").value = dadosCadastro.nascimento;
        document.getElementById("endereco").value = dadosCadastro.endereco;
        document.getElementById("cidade").value = dadosCadastro.cidade;
        document.getElementById("estado").value = dadosCadastro.estado;
        document.getElementById("cep").value = dadosCadastro.cep;
        document.getElementById("telefone").value = dadosCadastro.telefone;
    }
}