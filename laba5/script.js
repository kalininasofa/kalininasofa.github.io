document.addEventListener("DOMContentLoaded", function () {
var itogo = document.getElementById("stoimost");
itogo.addEventListener("click", calc());
});

function calc() {
var name = document.getElementById("select1");
var count = document.getElementById("count");
var result = document.getElementById("result");

if(count.value == "") alert("Количество товаров:");
else {
var price = 0;
price += parseInt(name.options[name.selectedIndex].value);
price = parseInt(count.value) * price;

result.innerHTML = price;
}
}
