window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

var tablaMaga = "<table></table>";
var tablaSorKezd = "<tr></tr>";
var tablaSor = "<td>a</td>";

function init() {
  ID("tabla").innerHTML += "<table></table>";
  for (let index = 0; index < 8; index++) {
    $("#tabla table")[0].innerHTML += tablaSorKezd;
    for (let i = 0; i < 8; i++) {
      $
      ("#tabla table tr")[index].innerHTML += tablaSor;
    }
  }
}
