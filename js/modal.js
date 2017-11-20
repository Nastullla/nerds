var btnWrite = document.querySelector(".write-to-us");
var btnClose = document.querySelector(".close");
var btnSubmit = document.querySelector(".feedback");
var popup = document.querySelector(".modal");
var nameValue = popup.querySelector("[name=name]");
var mailValue = popup.querySelector("[name=mail]");
var letterValue = popup.querySelector("[name=letter]");

btnWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-hide");
  popup.classList.remove("modal-error");
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
});

function ValidateField(field, evt) {
  if (!field.value) {
    field.classList.add("validaition-error");
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }  
}

btnSubmit.addEventListener("click", function (evt) {
  ValidateField(nameValue, evt);
  ValidateField(mailValue, evt);
  ValidateField(letterValue, evt);
});