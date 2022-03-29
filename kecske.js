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
function kepEleresiUt() {
    var tomb=[];
    tomb.push(event.target.src)
    console.log(tomb);
    event.target.style.display="none;"
    var kep=`<img src='${event.target.src}' alt='${event.target.alt}'/>`
    console.log(kep)
    ID("csonak").innerHTML+=kep;
    event.target.removeEventListener("click",kepEleresiUt)
    
}
function stilusFel() {
    event.target.className="kiemel";
}
function stilusFel() {
    
}

function init() {
  $("footer p")[0].innerHTML = "Kovács Dániel && Makra Zsófia Lili";
  $("footer p")[0].style.textAlign = "center";
  $("footer p")[0].style.textAlign = "20px";

  var kepTomb=$("#bal img")
  for (let index = 0; index < kepTomb.length; index++) {
      kepTomb[index].addEventListener("click",kepEleresiUt)
      
  }
}