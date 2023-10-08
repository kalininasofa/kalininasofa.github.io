<!DOCTYPE html>
document.addEventListener("DOMContentLoaded", function () {
var itogo = document.getElementById("itogo");
itogo.addEventListener("click", kalkuliator);
});

function kalkuliator() {
var name = document.getElementById("select");
var count = document.getElementById("count");
var result = document.getElementById("result");

if(count.value == "") alert("Введите количество товаров");
else {
var pr = 0;
pr += parseInt(name.options[name.selectedIndex].value);
pr = parseInt(count.value) * pr;

result.innerHTML = pr;
}
}

