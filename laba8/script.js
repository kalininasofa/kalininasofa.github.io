const button = document.querySelector("button");
const form = document.querySelector("#formId");
const popup = document.querySelector(".popup");

button.addEventListener("click",()=>{
    form.classList.add("open");
    popup.classList.add("open");
    window.history.pushState(null, null, "myForm.html");
    window.history.forward();
});

let popupOpen = false;
$(".popup-link").click(function() {
    showPopup();
});

function showPopup() {
    if (popupOpen) {
        window.history.back();
    }
    popupOpen = true;
    window.history.pushState("forward", null, "");
    $(".popup").addClass("open");
}

function hidePopup() {
    popupOpen = false;
    $(".popup").removeClass("open");
}

$(window).on("popstate", function() {
    hidePopup();
});

$(function(){
    $(".pop").submit(function(e){
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "https://formcarry.com/s/oVU4VvuuJD",
          data: new FormData(this),
          dataType: "json",
          processData: false,
          contentType: false,
          success: function(response){
            if(response.status == "success"){
                alert("Данные успешно отправлены!");
            }
            else if(response.code === 422){
              window.alert("Field validation failed");
              $.each(response.errors, function(key) {
                $('[name="' + key + '"]').addClass('formcarry-field-error');
              });
            }
            else{
              window.alert("An error occured: " + response.message);
            }
          },
          error: function(jqXHR, textStatus){
            const errorObject = jqXHR.responseJSON;
            window.alert("Request failed, " + errorObject.title + ": " + errorObject.message);
          },
          complete: function(){
            document.getElementById("myForm").reset();
          }
      });
    });
  });

document.querySelector(".pop").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const mail = $("#mail").val();
    const phone = $("#phone").val();
    const organiz = $("#organiz").val();
    const message = $("#message");
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("mail", JSON.stringify(mail));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("organiz", JSON.stringify(organiz));
    localStorage.setItem("message", JSON.stringify(message));
    const savedName = JSON.parse(localStorage.getItem("name"));
    const savedMail = JSON.parse(localStorage.getItem("mail"));
    const savedPhone = JSON.parse(localStorage.getItem("phone"));
    const savedOrganiz = JSON.parse(localStorage.getItem("organiz"));
    const savedMessage = JSON.parse(localStorage.getItem("message"));
    window.console.log(savedName);
    window.console.log(savedMail);
    window.console.log(savedPhone);
    window.console.log(savedOrganiz);
    window.console.log(savedMessage);
  });
