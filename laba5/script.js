document.addEventListener("DOMContentLoaded", function() {
var itogo = document.getElementById("itogo");
itogo.addEventListener("click", kalkuliator);
});

function validate() {
var count = document.getElementById("count").value;
var o = /^[\d]$/;
var valid = o.test(count);

if(valid) output = "Данные верны";
else output = "Неверные данные";
document.getElementById("message").innerHTML = output;
return valid;
}

function kalkuliator() {
var name = document.getElementById("select");
var count = document.getElementById("count");
var result = document.getElementById("result");

if(validate()){
var pr = 0;
pr += parseInt(name.options[name.selectedIndex].value);
pr = parseInt(count.value) * pr;
result.innerHTML = pr;
}
else alert("Не считается");
}
