document.addEventListener("DOMContentLoaded", function() {
    var visor = document.getElementById("textarea");

    window.adicionae = function(tecla) {
        visor.value += tecla;
        console.log(visor.value);
    }

    window.limparTela = function() {
        visor.value = "";
    }

    window.calculari = function() {
        try {
            visor.value = eval(visor.value);
        } catch (e) {
            visor.value = "Erro";
        }
    }

    window.apagarTudo = function() {
        visor.value = "";
    }

    window.naoSei = function() {
        visor.value = "Função não implementada";
    }
});

