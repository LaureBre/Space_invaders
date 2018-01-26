///////////////// Déclaration des VARIABLES //////////////////////

var decompte = 0;
var domBoiteEnnemis = document.getElementById('boiteEnnemis');
var domColTir = document.getElementsByClassName('col_tir');
var munition = document.getElementsByClassName('bullet');

// Mise en PAUSE
var stop = document.addEventListener('keydown', function(e) {

  if ((e.keyCode == 27) || (e.keyCode == 80) || (e.keyCode == 81)) { // escape key maps to keycode `27`, P 80, Q 81
    window.clearTimeout(moveEn);
    return true;
  }
  else {
    return false;
  }
});

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
// function moveEnnemis() {
//   if (posXennemis < 500) {
//     posXennemis += 10;
//     domBoiteEnnemis.style.marginLeft = posXennemis + "px";
//   };
// }
//
// var moveEn = window.setInterval(moveEnnemis, 200);
var direction = 1;
var posXennemis = 0;

function moveEnnemis() {
  if (((direction == 1) && (posXennemis < 500)) ||
     ((direction == -1) && (posXennemis > 0))) {
    posXennemis += 10 * direction;
  }
  else {
    direction = -direction;
  };
  domBoiteEnnemis.style.marginLeft = posXennemis + "px";
}

var moveEn = window.setInterval(moveEnnemis(), 200);
// Déplacement ENNEMIS vers bas
var n=0;

//

function tire(i) {
  domColTir[i].innerHTML = "!";
}

function moveMun(i) {
  munition[i].offsetTop = i + "%";
  console.log(munition[i].offsetTop);
}
// Déplacement MUNITIONS vers le haut ou bas

while (n <= domColTir.length) {
  if ((n < domColTir.length) && (!stop)) {
    setInterval("tire("+ n + ")", n*1000 + 2000);
    setInterval("moveMun(" + n + ")", n*1000 + 2000);
    n++;
  }
  // else if (n = domColTir.length) {
  //   n = 0;
  // }
  else {
    break;
  };
};

// Point de départ MUNITIONS

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
