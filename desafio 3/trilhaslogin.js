// trilhaslogin.js

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const senha = document.getElementById("senha").value.trim();

        const dadosSalvos = localStorage.getItem(`usuario_${usuario}`);

        if (!dadosSalvos) {
            alert("Usuário não encontrado. Cadastre-se primeiro.");
            return;
        }

        const dadosUsuario = JSON.parse(dadosSalvos);

        if (dadosUsuario.senha === senha) {
            alert("Login realizado com sucesso!");
            // Redireciona para trilhas.html
            window.location.href = "trilhas.html";
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    });
});
