///////////////// Déclaration des VARIABLES //////////////////////

var decompte = 0;



//////////////////// Déclaration des OBJETS ///////////////////////


///// Le constructeur !

var Entite = function(dom) {
      this.dom = dom;
      this.alive = true;
      this.hit = false;
      this.speed = 1
    };

Entite.prototype.nbLife = 1;

Entite.prototype.hurt = function(){
  this.nbLife--;
  function() {
    this.dom.class = "icon-explode"
  }
  if (this.nbLife == 0) {
    this.alive = false;
    this.dead = setTimeout(function(){
      this.dom.class = 'dead';
    }, 1500);
  };
  return (this.nbLife);
}

///// Nos objets

var ennemis = new Entite {
      posX: number,
      posY: number,
      speed: number
    };

var player = new Entite {
      posX: 50
    };

///////////////////////// FONCTIONS /////////////////////////

// Déplacement JOUEUR droite-gauche


// Déplacement ENNEMIS droite-gauche


// Déplacement ENNEMIS vers bas


// Déplacement MUNITIONS vers le haut ou bas


// Déclenchement MUNITIONS

// Point de départ MUNITIONS
