var k;

window.addEventListener('DOMContentLoaded', function (event) {
  let l = document.getElementById("myselect");
  k = 0;
  l.addEventListener("change", function(event) {
    let select = event.target;
    let v = document.getElementById("my select");
    let check = document.getElementById("checkboxes");
    let radios = document.getElementById("myradios");
    let count = document.getElementById("count");
            
    if (select.value == "0") {
      v.style.display = "none";
      check.style.display = "none";
      radios.style.display = "none";
      count.style.display = "none";
    }
    if (select.value == "1") {
      v.style.display = "none";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }
    if (select.value == "2") {
      v.style.display = "block";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }
    if (select.value == "3") {
      v.style.display = "none";
      check.style.display = "block";
      radios.style.display = "block";
      count.style.display = "block";
    }
    k = parseInt(select.value);
  });
  
  let br = document.querySelectorAll(".checkboxes input[type=checkbox]");
  br.forEach(function(checkbox) {
    checkbox.addEventListener("change", function(event) {
      let br = event.target;
      console.log(br.value);
    });
  });
});
    
function validate() {
  var count = document.getElementById("count").value;
  var o = /^\d{1,}$/;
  var valid = o.test(count);

  if (valid) {
    window.output = "Данные верны";
  } else {
    window.output = "Неверные данные";
  }
  document.getElementById("message").innerHTML = window.output;
  return valid;
}

function kalkuliator() {
  var result = document.getElementById("result");
  var m = k;
  var res;
  console.log(m);
  
  if(validate()) {
    if(k == 1) {
      res = kalkuliatorsertif();
      result.innerHTML = res;
    }
    if(k == 2) {
      res = kalkuliatorigr();
      result.innerHTML = res;
    }
    if(k == 3) {
      res = kalkuliatorflow();
      result.innerHTML = res;
    }
  }
  else {
    window.alert("oo");
  }
}

function kalkuliatorsertif(){
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");

  var f = 0;
  dostavka.forEach(e => {
    if (e.checked) {
      f = e.value;
    }
  });
  var price = 0;
  var stoimost = 5000;

  price += (parseInt(stoimost) * parseInt(count.value) + parseInt(f));

  return price;
}

function kalkuliator(){
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var flesh = document.getElementById("select1");
  var price = 0;
  var f;
  d.forEach(e => {
    if (e.checked) {
      f = e.value;
    }
  });

  price += parseInt(flesh.options[flesh.selectedIndex].value);
  console.log(price);
  price = parseInt(count.value) * price;
  console.log(price);
  price += parseInt(f);
  console.log(price);

  return price;
}

function kalkuliatorflow(){
  var count = document.getElementById("count");
  var d= document.getElementsByName("myradio");
  var o1 = document.getElementsByName("props");

  var f = 0;
  d.forEach(e => {
    if (e.checked) {
      f = parseInt(e.value);
    }
  });
  o1.forEach(e => {
    if (e.checked) {
      f += parseInt(e.value);
    }
  });

  var price = 0;
  var stoimost = 3000;

  price += ((stoimost * parseInt(count.value)) + f);

  return price;
}
