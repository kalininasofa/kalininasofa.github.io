document.addEventListener("DOMContentLoaded", function () {
var itogo = document.getElementById("itogo");
itogo.addEventListener("click", kalkuliator());
});

function kalkuliator(){
var name = document.getElementById("select");
var count = document.getElementById("count");
var result = document.getElementById("result");

if(count.value == "" && count.value < 0) alert("Введите необходимые данные:");
else {
var price = 0;
price += parseInt(name.options[name.selectedIndex].value);
price = parseInt(count.value) * price;
result.innerHTML = price;
}
}
