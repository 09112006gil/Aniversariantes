// Função para abrir a aba desejada e fechar as outras
function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Função para calcular o tempo até o próximo aniversário
function calcularTempoAteAniversario(dataAniversario) {
    var hoje = new Date();
    var aniversario = new Date(dataAniversario);
    aniversario.setFullYear(hoje.getFullYear()); // Define o ano do aniversário como o ano atual

    if (hoje > aniversario) {
        aniversario.setFullYear(hoje.getFullYear() + 1); // Se o aniversário já passou este ano, ajusta para o próximo ano
    }

    var diff = aniversario.getTime() - hoje.getTime();
    var dias = Math.floor(diff / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias
    return dias;
}

// Defina as datas de aniversário
var seuAniversario = "2024-05-01"; // Formato: "AAAA-MM-DD"
var aniversarioColega1 = "2024-06-15";
var aniversarioColega2 = "2024-08-20";

// Atualize o conteúdo das abas com o tempo restante até o aniversário correspondente
document.getElementById("seuAniversario").innerText = calcularTempoAteAniversario(seuAniversario) + " dias";
document.getElementById("aniversarioColega1").innerText = calcularTempoAteAniversario(aniversarioColega1) + " dias";
document.getElementById("aniversarioColega2").innerText = calcularTempoAteAniversario(aniversarioColega2) + " dias";

// Abra a primeira aba por padrão
openTab('tab1');
