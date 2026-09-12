const botaoSalao = document.getElementById("btnSalao");
const calendarioSalao = document.getElementById("calendarioSalao");

const botaoChurrasqueira = document.getElementById("btnChurrasqueira");
const calendarioChurrasqueira = document.getElementById("calendarioChurrasqueira");

const botaoQuadra = document.getElementById("btnQuadra");
const calendarioQuadra = document.getElementById("calendarioQuadra");


botaoSalao.addEventListener("click", function() {
    calendarioSalao.style.display = "block";
});


botaoChurrasqueira.addEventListener("click", function() {
    calendarioChurrasqueira.style.display = "block";
});


botaoQuadra.addEventListener("click", function() {
    calendarioQuadra.style.display = "block";
});