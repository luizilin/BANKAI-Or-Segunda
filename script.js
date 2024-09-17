const avanca = document.querySelectorAll(".btn-proximo");

avanca.forEach(button => {
    button.addEventListener("click", function () {
        const atual = document.querySelector(".ativo");
        
        const proximoPasso = "passo-" + this.getAttribute("data-proximo");
        console.log(proximoPasso)

        document.getElementById(proximoPasso).classList.add("ativo");
        atual.classList.remove("ativo");
        
    })

})
document.addEventListener('DOMContentLoaded', function () {
    const passos = document.querySelectorAll('.passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(botao => {
        botao.addEventListener('click', function () {
            const proximoPassoId = this.getAttribute('data-proximo');
            passos.forEach(passo => {
                passo.classList.remove('ativo');
            });
            const proximoPasso = document.getElementById('passo-' + proximoPassoId);
            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            }
        });
    });
});
