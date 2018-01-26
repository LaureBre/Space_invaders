// /////// //// // ENNEMIS /// // /// // ///
var domBoiteEnnemis = document.getElementById('boiteEnnemis');

// Déplacement latéral de la boîte des ennemis

// On initialise la direction en positif : elle prendra deux valeurs, +1 et -1
var direction = 1;
// La position initiale des ennemis est de 0 (marge gauche)
var posXennemis = 0;

// Fonction mouvement latéral
function moveEnnemis() {
      // La boîte atteint la marge droite à : 1280px (body) - 945px (conteneur)
  if (((direction == 1) && (posXennemis < 335)) ||
      // Si direction positive ET la boîte n'a pas atteint le bord droit OU
     ((direction == -1) && (posXennemis > 0)))
     // Si direction négative ET la boîte n'a pas atteint le bord gauche
  {
    // Alors on va vouloir décaller la position d'un point
    posXennemis += direction;
    // On ajoute +1 ou -1, vu que ce sont les deux valeurs possibles de direction
    // Si on ajoute -1 ça veut dire qu'on enlève 1 :
    // on ajoutant posXennemis à la marge on ira donc à gauche
    domBoiteEnnemis.style.marginLeft = posXennemis + "px";
  }
  else {
    // Si on ne se trouve pas dans les cas précédents
    // c'est forcément qu'on a atteint un bord :
    // On opère donc un changement de direction
    direction = -direction;
    // -(1) = -1
    // -(-1) = 1
  };
}

// Déplacement vers le bas

// Variable dans laquelle on va ranger la valeur de la marge
var posYennemis = 0;

function moveEnnemisY() {
  // Si la boîte n'est pas rentrée (20px) dans la barre du joueur à 320px de là..
  if (posYennemis < 340) {
    // Alors on incrémente
    posYennemis += 1;
    // Et on assigne cette nouvelle valeur à la marge haute de la boîte, en pixels
    domBoiteEnnemis.style.marginTop = posYennemis + "px";
  };
  // else if ()  // Non seulement on est en bas mais il y a encore des ennemis dans la boîte
  // {
    // Touché : perte d'une vie, réinitialisation des ennemis
  // };
}

// Déplacement des BALLES vers le bas puis retour

var posXballe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var domBalle = document.getElementsByClassName('bullet');
function tire() {
  for (var i=0; i < domBalle.length; i++) {
    // Si n'a pas déjà atteint le bas de la barre du joueur
    if (posXballe[i] < 590) {
      posXballe[i]++;
    }
    else {
      // Sinon on repart à zéro.. c'est-à-dire sous la dernière bestiole
      posXballe[i] = 0;
    };
    domBalle[i].style.top = posXballe[i] + "px";
  };
}


// PAUSE ou DEMARRAGE des ENNEMIS et des TIRS

// Pour changer le message à droite de l'en-tête, là où seront notés les niveaux
var domNiveau = document.getElementById('niveau');

// Au chargement c'est en pause.
var pause = true;

document.addEventListener('keydown', function(e) {
// Si l'utilisateur appuie sur entrée, on active
// Ne marche que si on est bien en pause (sinon ça double l'intervalle)
      if ((e.keyCode == 32) && pause)
        {
          // On lance les fonctions de mouvement, avec leurs intervalles de temps
          moveEn = window.setInterval(moveEnnemis, 50);
          moveEnY = window.setInterval(moveEnnemisY, 3000);

          moveBalle = window.setInterval(tire, 15);
          // On n'est plus en pause
          pause = false;
          // Changement du message à droite de l'en-tête
          domNiveau.innerHTML = "P ou Esc pour mettre en Pause";
        }
      else if  (
                  // Si on n'est pas déjà en pause
                  !pause &&
                  // et que l'utilisateur appuie sur Esc ou P
                  ((e.keyCode == 27) || (e.keyCode == 80))
               )
        {
          // On arrête le minuteur de la fonction
          window.clearTimeout(moveEn);
          window.clearTimeout(moveEnY);
          window.clearTimeout(moveBalle);
          // On est maintenant en pause
          pause = true;
          // Changement du message à droite de l'en-tête
          domNiveau.innerHTML = "Espace pour reprendre";
        };

    });


// Déplacement JOUEUR
var domPlayer = document.getElementById('player');
var posPlayer = 620;

document.addEventListener('keydown', function(e) {
  if ((e.keyCode == 37) && (posPlayer > 0))
  {
    posPlayer -= 10;
  }
  // Appuie sur touche -> et n'a pas atteint le bord (on retranche la largeur de l'icône : 39px)
  else if ((e.keyCode == 39) && (posPlayer < 1240))
  {
    posPlayer += 10;
  }
  domPlayer.style.left = posPlayer + "px";
});
    // left = 37
    // up = 38
    // right = 39
    // down = 40
