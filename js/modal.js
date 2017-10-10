var btnWrite = document.querySelector(".write-to-us");
var btnClose = document.querySelector(".close");
var popup = document.querySelector(".modal");

// var form = popup.querySelector("form");

// var arrivalDate = popup.querySelector("[name=arrival-date]");
// var departureDate = popup.querySelector("[name=departure-date]");
// var grownups = popup.querySelector("[name=grownups]");
// var children = popup.querySelector("[name=children]");

// var storageGrownups = localStorage ? localStorage.getItem("grownups") : null;
// var storageChildren = localStorage ? localStorage.getItem("children") : null;

// if (storageGrownups) {
      // grownups.value = storageGrownups;
// } 

// if (storageChildren) {
      // children.value = storageChildren;
// } 

btnWrite.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-hide");
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
});




/*form.addEventListener("submit", function (evt) {
    if (!arrivalDate.value || !departureDate.value 
    	|| Number(grownups.value) < 1 || Number(children.value) < 0) {
      	evt.preventDefault();
      	popup.classList.remove("modal-show");
      	popup.classList.remove("modal-error");
      	popup.offsetWidth = popup.offsetWidth;
      	popup.classList.add("modal-error");
    } else {
    	if (localStorage) {
      		localStorage.setItem("grownups", grownups.value);
      		localStorage.setItem("children", children.value);
      	}
    }
});*/