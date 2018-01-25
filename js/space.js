///////////////// Déclaration des VARIABLES //////////////////////

var decompte = 0;
var domBoiteEnnemis = document.getElementById('boiteEnnemis');
var domColTir = document.getElementsByClassName('col_tir');

var posXennemis = 0;
//////////////////// Déclaration des OBJETS ///////////////////////


///// Le constructeur !
//
// var Entite = function(dom) {
//       this.dom = dom;
//       this.alive = true;
//       this.hit = false;
//       this.speed = 1
//     };
//
// Entite.prototype.nbLife = 1;
//
// Entite.prototype.hurt = function(){
//   this.nbLife--;
//   function() {
//     this.dom.class = "icon-explode"
//   }
//   if (this.nbLife == 0) {
//     this.alive = false;
//     this.dead = setTimeout(function(){
//       this.dom.class = 'dead';
//     }, 1500);
//   };
//   return (this.nbLife);
// }

///// Nos objets

// var ennemis = new Entite {
//       posX: number,
//       posY: number,
//       speed: number
//     };
//
// var player = new Entite {
//       posX: 50
//     };

///////////////////////// FONCTIONS /////////////////////////

// Déplacement JOUEUR droite-gauche


// Déplacement ENNEMIS droite-gauche
function moveEnnemis() {
  if (posXennemis < 500) {
    posXennemis += 10;
    domBoiteEnnemis.style.marginLeft = posXennemis + "px";
  };
}

// setInterval(function() {
//   domBoiteEnnemis.style.marginLeft += "10px";
//   console.log(domBoiteEnnemis.style.marginLeft);
// }, 500);

var moveEn = window.setInterval(moveEnnemis, 500);
// Déplacement ENNEMIS vers bas
var i=0;

function tire(n) {
  domColTir[n].innerHTML = "!";
}

function moveMun(n) {
  domColTir[n-1].style.paddingTop = n-1 + "%";
}
// Déplacement MUNITIONS vers le haut ou bas

for (var n = 0; n < domColTir.length; n++) {
  setInterval("tire("+ n + ")", n*1000 + 2000);
  setInterval("moveMun(" + (n+1), n*1000 + 2000);
}

// Point de départ MUNITIONS

// Mise en PAUSE
document.addEventListener('keydown', function(e) {

      if ((e.keyCode == 27) || (e.keyCode == 80) || (e.keyCode == 81)) { // escape key maps to keycode `27`
         window.clearTimeout(moveEn);
        }

    });

// $(document).keydown(function(e) {
//      if ((e.keyCode == 27) || (e.keyCode == 80) || (e.keyCode == 81)) { // escape key maps to keycode `27`
//         window.clearTimeout(moveEn);
//     }
// });



// keyCode is now in the process of being deprecated and most modern browsers offer the key property now, although you'll still need a fallback for decent browser support for now (at time of writing the current releases of Chrome and Safari don't support it).
//
// document.onkeydown = function(evt) {
//     evt = evt || window.event;
//     var isEscape = false;
//     if ("key" in evt) {
//         isEscape = (evt.key == "Escape" || evt.key == "Esc");
//     } else {
//         isEscape = (evt.keyCode == 27);
//     }
//     if (isEscape) {
//         alert("Escape");
//     }
// };
