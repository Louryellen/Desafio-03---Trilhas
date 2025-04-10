document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    // Aplicar máscaras nos campos ao digitar
    document.getElementById("telefone").addEventListener("input", function () {
        formatarTelefone(this);
    });

    document.getElementById("cpf").addEventListener("input", function () {
        formatarCPF(this);
    });

    document.getElementById("cep").addEventListener("input", function () {
        formatarCEP(this);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (!usuario || !senha) {
            alert("Usuário e senha são obrigatórios.");
            return false;
        }

        const dadosFormulario = {
            nome: document.getElementById("nome").value,
            dataNascimento: document.getElementById("data_nascimento").value,
            cpf: document.getElementById("cpf").value,
            sexo: document.getElementById("sexo").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            cep: document.getElementById("cep").value,
            rua: document.getElementById("rua").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            estado: document.getElementById("estado").value,
            trilha: document.querySelector('input[name="trilha"]:checked')?.value || "",
            usuario: usuario,
            senha: senha
        };

        localStorage.setItem(`usuario_${usuario}`, JSON.stringify(dadosFormulario));
        alert("Dados salvos com sucesso!");
        window.location.href = "login.html";
    });
});

// Máscara para CPF
function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, '');
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    }
    campo.value = cpf;
}

// Máscara para telefone (formato: (99) 99999-9999 ou (99) 9999-9999)
function formatarTelefone(campo) {
    let telefone = campo.value.replace(/\D/g, '');

    if (telefone.length <= 10) {
        telefone = telefone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        telefone = telefone.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    campo.value = telefone;
}

// Máscara para CEP (formato: 99999-999)
function formatarCEP(campo) {
    let cep = campo.value.replace(/\D/g, '');
    cep = cep.replace(/(\d{5})(\d{0,3})/, '$1-$2');
    campo.value = cep;
}


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleDarkMode");

    // Aplica tema salvo, se existir
    if (localStorage.getItem("modoEscuro") === "true") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Salvar o estado do tema
        const modoEscuroAtivo = document.body.classList.contains("dark-mode");
        localStorage.setItem("modoEscuro", modoEscuroAtivo);
    });
});
