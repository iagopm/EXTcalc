const numerodos = 2;
const numerouno = 1;
const numerotres = 3;
const numerocuatro = 4;
const numerocinco = 5;
const numeroseis = 6;
const numerosiete = 7;
const numeroocho = 8;
const numeronueve = 9;
const numerocero= 0;
const restar="-";
const sumar="+";
const multiplicar="*";
const dividir="/";
const punto="."
document.addEventListener('DOMContentLoaded', function() {
    var sepresionauno = document.getElementById('uno');
    sepresionauno.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerouno);
    }, false);
    var sepresionados = document.getElementById('dos');
    sepresionados.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerodos);
    }, false);
    var sepresionatres = document.getElementById('tres');
    sepresionatres.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerotres);
    }, false);
    var sepresionacuatro = document.getElementById('cuatro');
    sepresionacuatro.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerocuatro);
    }, false);
    var sepresionacinco = document.getElementById('cinco');
    sepresionacinco.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerocinco);
    }, false);
    var sepresionaseis = document.getElementById('seis');
    sepresionaseis.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numeroseis);
    }, false);
    var sepresionasiete = document.getElementById('siete');
    sepresionasiete.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerosiete);
    }, false);
    var sepresionaocho = document.getElementById('ocho');
    sepresionaocho.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numeroocho);
    }, false);
    var sepresionanueve = document.getElementById('nueve');
    sepresionanueve.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numeronueve);
    }, false);
    var sepresionacero = document.getElementById('cero');
    sepresionacero.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(numerocero);
    }, false);
    var sepresionaborrar = document.getElementById('borrar');
    sepresionaborrar.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.slice(0, -1);
    }, false);
    var sepresionaborrartodo = document.getElementById('borrartodo');
    sepresionaborrartodo.addEventListener('click', function() {
        document.getElementById("display").innerHTML ="0";
    }, false);
    var sepresionasumar = document.getElementById('sumar');
    sepresionasumar.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(sumar);
    }, false);
    var sepresionarestar = document.getElementById('menos');
    sepresionarestar.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(restar);
    }, false);
    var sepresionamultiplicar = document.getElementById('multiplicar');
    sepresionamultiplicar.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(multiplicar);
    }, false);
    var sepresionadividir = document.getElementById('dividir');
    sepresionadividir.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(dividir);
    }, false);
    var sepresionacoma = document.getElementById('coma');
    sepresionacoma.addEventListener('click', function() {
        document.getElementById("display").innerHTML =document.getElementById("display").innerHTML.concat(punto);
    }, false);
    var sepresionaigual = document.getElementById('igual');
    sepresionaigual.addEventListener('click', function() {
        var total= eval(document.getElementById("display").innerHTML);
        document.getElementById("display").innerHTML = total;

    }, false);
}, false);