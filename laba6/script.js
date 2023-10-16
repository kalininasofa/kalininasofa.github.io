var k;
window.addEventListener('DOMContentLoaded', function(event) {
  let l = document.getElementById("myselect");
  k = 0;
  l.addEventListener("change", function(event) {
    let select = event.target;
    let v = document.getElementById("select1");
    let check = document.getElementById("checkboxes");
    let radios = document.getElementById("myradios");
    let count = document.getElementById("count");
    if (select.value == "1") {
      v.style.display = "block";
      check.style.display = "none";
      radios.style.display = "block";
      count.style.display = "block";
    }
    if (select.value == "2") {
      v.style.display = "none";
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
    window.output = "верно";
  } else {
    window.output = " неверно! ";
  }
  document.getElementById("message").innerHTML = window.output;
  return valid;
}

function kalkuliator() {
  var result = document.getElementById("result");
  var t = k;
  var res;
  console.log(t);
  if (validate()) {
    if (k == 1) {
      res = kalkuliatefleshka();
      result.innerHTML = res;
    }
    if (k == 2) {
      res = kalkuliatecards();
      result.innerHTML = res;
    }
    if (k == 3) {
      res = kalkuliatepods();
      result.innerHTML = res;
    }
  } else {
    window.alert("!");
  }
}

function kalkuliatefleshka() {
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var fleshka = document.getElementById("select1");
  var price = 0;
  var oo = 0;
  d.forEach(e => {
    if (e.checked) {
      oo = e.value;
    }
  });
  price += parseInt(fleshka.options[fleshka.selectedIndex].value);
  console.log(price);
  price = parseInt(count.value) * price;
  console.log(price);
  price += parseInt(oo);
  console.log(price);
  return price;
}

function kalkuliatecards() {
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var oo = 0;
  d.forEach(e => {
    if (e.checked) {
      oo = e.value;
    }
  });
  var price = 0;
  var pr = 5000;
  price += (parseInt(pr) * parseInt(count.value) + parseInt(oo));
  return price;
}

function kalkuliatepods() {
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var option = document.getElementsByName("props");
  var oo = 0;
  d.forEach(e => {
    if (e.checked) {
      oo = parseInt(e.value);
    }
  });
  option.forEach(e => {
    if (e.checked) {
      oo += parseInt(e.value);
    }
  });
  var price = 0;
  var pr = 4000;
  price += ((pr * parseInt(count.value)) + oo);
  return price;
}

function kalkuliateperehodnik() {
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var option = document.getElementsByName("props");
  var oo = 0;
  d.forEach(e => {
    if (e.checked) {
      oo = parseInt(e.value);
    }
  });
  option.forEach(e => {
    if (e.checked) {
      oo += parseInt(e.value);
    }
  });
  var price = 0;
  var pr = 3500;
  price += ((pr * parseInt(count.value)) + oo);
  return price;
}

function kalkuliatechehol() {
  var count = document.getElementById("count");
  var d = document.getElementsByName("myradio");
  var option = document.getElementsByName("props");
  var oo = 0;
  d.forEach(e => {
    if (e.checked) {
      oo = parseInt(e.value);
    }
  });
  option.forEach(e => {
    if (e.checked) {
      oo += parseInt(e.value);
    }
  });
  var price = 0;
  var pr = 3000;
  price += ((pr * parseInt(count.value)) + oo);
  return price;
}
