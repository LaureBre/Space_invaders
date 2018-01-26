
var domColTir = document.getElementsByClassName('col_tir');
var domBalle = document.getElementsByClassName('bullet');
var posBalle = new Array();

function moveBalle(balle, pos) {
  balle.offsetTop = pos + 20;
  pos += 20;
  console.log(balle, pos);
  // return (i, pos;
}

for (var i = 0; i < domBalle.length; i++) {
  posBalle.push(domBalle[i].offsetTop);
  // console.log(domBalle[i], posBalle[i]);
  window.setInterval(moveBalle(domBalle[i], posBalle[i]), 200);
};
