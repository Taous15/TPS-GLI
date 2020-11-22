
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.x1 = 0;
  this.x2 = 0;
  this.y1 = 0;
  this.y2 = 0;
  this.pression = false;
  this.canvas=canvas;
  this.interactor = interactor;

  	

	// Developper les 3 fonctions gérant les événements
  this.fonc_pression = function(evt){
    this.pression = true;
    const pos = getMousePosition(canvas, evt);
    this.x1 = pos.x;
    this.y1 = pos.y;
    //console.log("Pression : x1, "+ this.x1 + " y1, "+  this.y1 + "x2, "+ this.x2 + " y2, "+ this.y2 + " pression " +this.pression);
    this.interactor.onInteractionStart(this)
  }.bind(this);

  this.fonc_deplacements = function(evt){
    console.log(this.pression)
    if(this.pression ){
    const pos = getMousePosition(canvas, evt);
    this.x2 = pos.x;
    this.y2 = pos.y;
    //console.log("Deplacement: x1, "+ this.x1 + "y1, "+ this.y1 + "x2, " + this.x2+ "y2, " +this.y2 + this.pression);
    this.interactor.onInteractionUpdate(this);

    }
  }.bind(this);

  this.fonc_relachement = function(evt){
    if(this.pression ){
     this.pression = false;
    const pos = getMousePosition(canvas, evt);
    this.x2 = pos.x;
    this.y2 = pos.y;
    console.log(this.x1 + this.y1 + this.x2+ this.y2 + this.pression);
    this.interactor.onInteractionEnd(this);

    }
  }.bind(this);
  // Associer les fonctions précédentes aux évènements du canvas.

  this.canvas.addEventListener("mousedown",this.fonc_pression, false);
  this.canvas.addEventListener("mousemove",this.fonc_deplacements, false);
  this.canvas.addEventListener("mouseup",this.fonc_relachement,false);


};
// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



