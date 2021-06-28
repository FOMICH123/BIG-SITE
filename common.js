let modalInfo = document.querySelector("form");
let modal = document.querySelector(".modal");
let callMe = document.querySelector(".callMe");
callMe.onclick = function () {
  modal.style.transform = "translateY(0)";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.transform = "translateY(100%)";
  }
  //  else {
  //   modal.style.transform = "translateY(0)";
  // }
  else if (event.target == callMe) {
    modal.style.transform = "translateY(0)";
  }
};
