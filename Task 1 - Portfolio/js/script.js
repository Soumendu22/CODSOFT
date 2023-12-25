let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function displayInfo() {
  alert("Form Submitted Succesfully,I will reach to you as soon as possible.");
}
let output = document.getElementById("submit");
const formToReset = document.getElementById("form");
formToReset.addEventListener("submit", (e) => {
  e.preventDefault();
  formToReset.reset();
});
