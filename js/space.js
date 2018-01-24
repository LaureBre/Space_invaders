///////////////// Déclaration des VARIABLES //////////////////////

var decompte = 0;



//////////////////// Déclaration des OBJETS ///////////////////////


///// Le constructeur !

var Entite = function(dom) {
      this.dom = dom;
      this.alive = true;
      this.hit = false;
      this.nbLife = 1;
      this.speed = 1
      this.hurt = function(){
        this.nbLife--;
        function() {
          this.dom.class = "icon-explode"
        }
        if (this.nbLife == 0) {
          this.alive = false;
          this.dead = function(){
            setTimeout(mafonction, 1500);

          }
        };
        return (this.nbLife);
      }

    };

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

Entite.prototype
