document.addEventListener("DOMContentLoaded", function () {
var itogo = document.getElementById("itogo");
itogo.addEventListener("click", kalkuliator());
});

function check() {
let x = document.getElementById("count").value;
if (x > 0) {
return true;
}
}

function kalkuliator(){
var name = document.getElementById("select");
var count = document.getElementById("count");
var result = document.getElementById("result");

if(count.value == "") alert("Введите количество товаров:");
if(check()) {
var price = 0;
price += parseInt(name.options[name.selectedIndex].value);
price = parseInt(count.value) * price;
result.innerHTML = price;
}
} 
