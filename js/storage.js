export function salvarCadastro(dados) {
    localStorage.setItem("cadastroONG", JSON.stringify(dados));
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroONG");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}