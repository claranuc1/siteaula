import { configurarCadastro } from "./cadastro.js";
const conteudo = document.getElementById("conteudo");

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pagina = link.getAttribute("href");

        if (pagina === "#inicio") {
            conteudo.innerHTML = `
                <h2>ONG Esperança</h2>
                <p>
                    A ONG Esperança atua na promoção de ações sociais
                    e no apoio à comunidade.
                </p>
            `;
        }

        if (pagina === "#projetos") {
            conteudo.innerHTML = `
                <section>
                    <h2>Projetos</h2>

                    <p>
                        A ONG Esperança desenvolve projetos sociais
                        voltados para o apoio e desenvolvimento da comunidade.
                    </p>

                    <h3>Doações</h3>

                    <p>
                        As doações ajudam a ONG Esperança a manter seus projetos
                        e apoiar pessoas que precisam de ajuda.
                    </p>

                    <p>
                        Para realizar uma contribuição financeira, entre em contato
                        com a organização pelos canais disponíveis.
                    </p>

                    <h3>Voluntariado</h3>

                    <p>
                        O trabalho voluntário permite que pessoas participem
                        das ações e projetos realizados pela ONG.
                    </p>

                    <p>
                        Quem deseja ser voluntário pode entrar em contato com a ONG
                        para conhecer as atividades disponíveis.
                    </p>
                </section>
            `;
        }

        if (pagina === "#doacoes") {
            conteudo.innerHTML = `
                <h2>Doações</h2>

                <p>
                    As doações ajudam a ONG Esperança a manter seus projetos
                    e apoiar pessoas que precisam de ajuda.
                </p>

                <p>
                    Para realizar uma contribuição financeira, entre em contato
                    com a organização pelos canais disponíveis.
                </p>
            `;
        }

        if (pagina === "#voluntariado") {
            conteudo.innerHTML = `
                <h2>Voluntariado</h2>

                <p>
                    O trabalho voluntário permite que pessoas participem
                    das ações e projetos realizados pela ONG.
                </p>

                <p>
                    Quem deseja ser voluntário pode entrar em contato com a ONG
                    para conhecer as atividades disponíveis.
                </p>
            `;
        }

        if (pagina === "#cadastro") {
            conteudo.innerHTML = `
                <h2>Cadastro - ONG Esperança</h2>

                <div id="mensagem-sucesso" class="alerta" style="display: none;" role="alert" aria-live="polite">
                    <strong>Cadastro realizado com sucesso!</strong>
                    Obrigado por fazer parte da ONG Esperança.
                </div>

                <form id="form-cadastro">

                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required>

                        <label for="cpf">CPF:</label>
                        <input type="text"
                               id="cpf"
                               name="cpf"
                               pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                               placeholder="000.000.000-00"
                               required>

                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>

                        <label for="nascimento">Data de nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>

                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>

                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>

                        <label for="estado">Estado:</label>
                        <input type="text"
                               id="estado"
                               name="estado"
                               maxlength="2"
                               placeholder="PR"
                               required>

                        <label for="cep">CEP:</label>
                        <input type="text"
                               id="cep"
                               name="cep"
                               pattern="[0-9]{5}-[0-9]{3}"
                               placeholder="00000-000"
                               required>

                    </fieldset>

                    <fieldset>
                        <legend>Contato</legend>

                        <label for="telefone">Telefone:</label>
                        <input type="tel"
                               id="telefone"
                               name="telefone"
                               pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                               placeholder="41 99999-9999"
                               required>

                    </fieldset>

                    <button type="submit">Cadastrar</button>

                </form>
            `;

            const formulario = document.getElementById("form-cadastro");
const mensagem = document.getElementById("mensagem-sucesso");

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

        localStorage.setItem("cadastroONG", JSON.stringify(dadosCadastro));

        mensagem.style.display = "block";
    }
});

const dadosSalvos = localStorage.getItem("cadastroONG");

if (dadosSalvos) {

    const dadosCadastro = JSON.parse(dadosSalvos);

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

    });

});